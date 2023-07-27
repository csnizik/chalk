<?php

namespace Drupal\chalk_token\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure Chalk Token settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'chalk_token_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['chalk_token.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['foundation']['display'] = [
      '#type' => 'select',
      '#title' => $this->t('Display'),
      '#description' => $this->t('Select the display property value.'),
      // '#default_value' => $config->get('foundation.display') ?? 'block',
      '#options' => [
        'block' => $this->t('Block'),
        'hidden' => $this->t('Hidden'),
        'inline' => $this->t('Inline'),
        'inline-block' => $this->t('Inline Block'),
        'inline-flex' => $this->t('Inline Flex'),
        'inline-grid' => $this->t('Inline Grid'),
        'flex' => $this->t('Flex'),
        'grid' => $this->t('Grid'),
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if ($form_state->getValue('example') != 'example') {
      $form_state->setErrorByName('example', $this->t('The value is not correct.'));
    }
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('chalk_token.settings')
      ->set('foundation.display', $form_state->getValue('display'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}
