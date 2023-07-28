<?php

namespace Drupal\chalk_token\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class FoundationForm.
 */
class FoundationForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['chalk_token.foundation'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'foundation_form';
  }

  /**
   *
   */
  public function addOne(array &$form, FormStateInterface $form_state) {
    $num_properties = $form_state->get('num_properties');
    $add_button = $num_properties + 1;
    $form_state->set('num_properties', $add_button);

    // Store the indexes of the new fields.
    $new_fields = $form_state->get('new_fields') ?? [];
    $new_fields[] = $add_button - 1;
    $form_state->set('new_fields', $new_fields);

    // Rebuild the form with the additional field.
    $form_state->setRebuild();
  }

  /**
   *
   */
  public function addmoreCallback(array &$form, FormStateInterface $form_state) {
    return $form['properties'];
  }

  /**
   *
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('chalk_token.foundationconfig');

    if ($form_state->has('num_properties')) {
      $num_properties = $form_state->get('num_properties');
    }
    else {
      $values = $config->get('values') ?? [];
      $num_properties = count($values);
      if ($num_properties === 0) {
        $num_properties = 1;
      }
      $form_state->set('num_properties', $num_properties);
    }

    $form['properties'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Properties'),
      '#prefix' => '<div id="properties-wrapper">',
      '#suffix' => '</div>',
    ];

    for ($i = 0; $i < $num_properties; $i++) {
      if (isset($values[$i])) {
        $form['properties'][$i] = [
          '#type' => 'details',
          '#title' => $this->t('Property #@num', ['@num' => $i + 1]),
          '#open' => TRUE,
        ];

        $form['properties'][$i]['label'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Label'),
          '#default_value' => $values[$i]['label'],
        ];

        $form['properties'][$i]['value'] = [
          '#type' => 'number',
          '#title' => $this->t('Value'),
          '#default_value' => $values[$i]['value'],
          '#step' => 0.01,
        ];
      }
      else {
        // For newly added property sets, no default values.
        $form['properties'][$i] = [
          '#type' => 'details',
          '#title' => $this->t('Property #@num', ['@num' => $i + 1]),
          '#open' => TRUE,
        ];

        $form['properties'][$i]['label'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Label'),
          '#default_value' => '',
        ];

        $form['properties'][$i]['value'] = [
          '#type' => 'number',
          '#title' => $this->t('Value'),
          '#default_value' => '',
          '#step' => 0.01,
        ];
      }
    }

    // @todo new field pairs are prefilled w/ values from previous
    $form['properties']['actions']['add_property'] = [
      '#type' => 'submit',
      '#value' => $this->t('Add another property'),
      '#submit' => ['::addOne'],
      '#ajax' => [
        'callback' => '::addmoreCallback',
        'wrapper' => 'properties-wrapper',
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $properties = $form_state->getValue('properties');
    $saved_properties = [];

    if (is_array($properties)) {
      foreach ($properties as $index => $property) {
        if (is_array($property) && !empty($property['label']) && !empty($property['value'])) {
          $saved_properties[] = [
            'label' => $property['label'],
            'value' => $property['value'],
          ];
        }
      }
    }

    $this->config('chalk_token.foundation')->set('values', $saved_properties)->save();
  }

}
