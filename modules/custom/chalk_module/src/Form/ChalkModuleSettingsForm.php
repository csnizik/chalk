<?php

namespace Drupal\chalk_module\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class ChalkModuleSettingsForm.
 */
class ChalkModuleSettingsForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'chalk_theme_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['want_pony'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Do you want a pony?'),
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    $form['tokens'] = [
      '#type' => 'details',
      '#title' => $this->t('Token names and values'),
      '#open' => TRUE,
    ];

    $tokens = $this->getTokenValues();
      var_dump($tokens);
    foreach ($tokens as $name => $value) {
      $form['tokens'][$name] = [
        '#markup' => '<div><strong>' . $name . ':</strong> ' . $value . '</div>',
      ];
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $want_pony = $form_state->getValue('want_pony');
    if ($want_pony) {
      \Drupal::logger('chalk_module')->notice('User wants a pony.');
    } else {
      \Drupal::logger('chalk_module')->notice('User does not want a pony.');
    }
  }

  /**
   * Helper method to retrieve token names and values from _design-tokens.scss.
   */
  private function getTokenValues() {
    $tokens = [];
    $file_system = \Drupal::service('file_system');
    $file_path = $file_system->realpath(\Drupal::theme()->getActiveTheme()->getPath() . '/src/tokens/_design-tokens.scss');
    

  if (file_exists($file_path)) {
      $file_contents = file_get_contents($file_path);
      preg_match_all('/\$([\w-]+):\s*([^;\n]+);/m', $file_contents, $matches, PREG_SET_ORDER);
      foreach ($matches as $match) {
        $tokens[$match[1]] = $match[2];
      }
    }
    return $tokens;
  }

}
