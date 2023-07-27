<?php

namespace Drupal\chalk_token\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 *
 */
class FoundationTokenConfigForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'foundation_token_config';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['chalk_token.plugin.foundation'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('chalk_token.plugin.foundation');

    $form['token_value'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Token Value'),
      // '#default_value' => $config->get('token_value'),
    ];

    $form['token_description'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Token Description'),
      '#default_value' => $config->get('token_description'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('chalk_token.plugin.foundation')
      ->set('token_value', $form_state->getValue('token_value'))
      ->set('token_description', $form_state->getValue('token_description'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
