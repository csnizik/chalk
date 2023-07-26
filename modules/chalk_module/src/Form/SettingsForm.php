<?php

namespace Drupal\chalk_module\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure Chalk settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'chalk_module_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['chalk_module.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('chalk_module.settings');

    $form['settings_tabs'] = [
      '#type' => 'vertical_tabs',
      '#prefix' => '<h2><small>' . $this->t('Settings') . '</small></h2>',
    ];

    $form['foundation'] = [
      '#type' => 'details',
      '#title' => $this->t('1-Foundation'),
      '#group' => 'settings_tabs',
    ];

    $form['foundation']['background'] = [
      '#type' => 'details',
      '#title' => $this->t('Background'),
      '#open' => FALSE,
    ];

    $form['foundation']['background']['background_size'] = [
      '#type' => 'select',
      '#title' => $this->t('Background Size'),
      '#options' => [
        'contain' => $this->t('Contain'),
        'cover' => $this->t('Cover'),
      ],
      '#default_value' => $config->get('foundation.background_size'),
    ];

    $form['foundation']['background']['background_repeat'] = [
      '#type' => 'select',
      '#title' => $this->t('Background Repeat'),
      '#options' => [
        'both' => $this->t('Repeat'),
        'none' => $this->t('No Repeat'),
        'x' => $this->t('Repeat X'),
        'y' => $this->t('Repeat Y'),
      ],
      '#default_value' => $config->get('foundation.background_repeat'),
    ];

    $form['foundation']['background']['background_position'] = [
      '#type' => 'select',
      '#title' => $this->t('Background Position'),
      '#options' => [
        'bottom' => $this->t('Bottom'),
        'center' => $this->t('Center'),
        'left' => $this->t('Left'),
        'right' => $this->t('Right'),
        'top' => $this->t('Top'),
      ],
      '#default_value' => $config->get('foundation.background_position'),
    ];

    $form['foundation']['breakpoint'] = [
      '#type' => 'details',
      "#title" => $this->t('Breakpoint'),
      '#open' => FALSE,
    ];

    $form['foundation']['breakpoint']['breakpoint_values'] = [
      '#type' => 'table',
      '#header' => [
        $this->t('Breakpoints'),
        $this->t('Width (in pixels)'),
      ],
      '#empty' => $this->t('No breakpoints found.'),
    ];

    $breakpoints = [
      'xs' => $config->get('foundation.breakpoint.xs'),
      'sm' => $config->get('foundation.breakpoint.sm'),
      'md' => $config->get('foundation.breakpoint.md'),
      'lg' => $config->get('foundation.breakpoint.lg'),
      'xl' => $config->get('foundation.breakpoint.xl'),
    ];

    foreach ($breakpoints as $breakpoint => $value) {
      $form['foundation']['breakpoint']['breakpoint_values'][$breakpoint]['breakpoint'] = [
        '#type' => 'markup',
        '#markup' => $this->t($breakpoint),
      ];
      $form['foundation']['breakpoint']['breakpoint_values'][$breakpoint]['value'] = [
        '#type' => 'textfield',
        '#default_value' => $value
      ];
    }

    $form['framework'] = [
      '#type' => 'details',
      '#title' => $this->t('2-Framework'),
      '#group' => 'settings_tabs',
    ];
    $form['feature'] = [
      '#type' => 'details',
      '#title' => $this->t('3-Feature'),
      '#group' => 'settings_tabs',
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
    $this->config('chalk_module.settings')
      ->set('foundation.background_size', $form_state->getValue('background_size'))
      ->set('foundation.background_repeat', $form_state->getValue('background_repeat'))
      ->set('foundation.background_position', $form_state->getValue('background_position'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
