<?php

namespace Drupal\chalk_module\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

class DesignTokenForm extends EntityForm {

  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);
    $entity = $this->entity;

    // Attach style-dictionary
    $form['#attached']['library'][] = 'chalk_module/style-dictionary';

    // Add level field.
    $form['field_token_level'] = [
      '#type' => 'radios',
      '#title' => $this->t('Level'),
      '#options' => [
        'level_1_foundation' => $this->t('Level 1 - Foundation'),
        'level_2_context' => $this->t('Level 2 - Context'),
        'level_3_expression' => $this->t('Level 3 - Expression'),
      ],
      '#required' => TRUE,
      // @TODO: Add AJAX callback for dynamic behavior.
    ];

    // Add foundation type field.
    $form['field_foundation_type'] = [
      '#type' => 'select',
      '#title' => $this->t('Foundation Type'),
      '#options' => [
        'background' => $this->t('Background'),
        'breakpoint' => $this->t('Breakpoint'),
        'color' => $this->t('Color'),
        'display' => $this->t('Display'),
        'flex' => $this->t('Flex'),
        'font' => $this->t('Font'),
        'opacity' => $this->t('Opacity'),
        'position' => $this->t('Position'),
        'spacing' => $this->t('Spacing'),
        'transition' => $this->t('Transition'),
        'visibility' => $this->t('Visibility'),
        'z_index' => $this->t('Z-Index'),
      ],
      '#states' => [
        'visible' => [
          ':input[name="field_token_level"]' => ['value' => 'level_1_foundation'],
        ],
      ],
      // @TODO: Add AJAX callback for dynamic behavior.
    ];
    // Add context type field.
    $form['field_context_type'] = [
      '#type' => 'select',
      '#title' => $this->t('Context Type'),
      '#options' => [
        'border' => $this->t('Border'),
        'box_shadow' => $this->t('Box Shadow'),
        'color' => $this->t('Color'),
        'letter_spacing' => $this->t('Letter Spacing'),
        'pseudo_class' => $this->t('Pseudo Class'),
        'font' => $this->t('Font')
      ],
      '#states' => [
        'visible' => [
          ':input[name="field_token_level"]' => ['value' => 'level_2_context'],
        ],
      ],
      // @TODO: Add AJAX callback for dynamic behavior.
    ];

    // @TODO: Add form elements for each foundation type and the necessary AJAX
    // callbacks for showing and hiding fields based on the foundation type
    // selection.

    return $form;
  }

  public function save(array $form, FormStateInterface $form_state) {
    $this->entity->save();
    $form_state->setRedirect('entity.design_token.collection');
  }

}
