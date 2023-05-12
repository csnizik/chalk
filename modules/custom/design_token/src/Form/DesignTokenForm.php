<?php

namespace Drupal\design_token\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class DesignTokenForm.
 */
class DesignTokenForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $design_token = $this->entity;
    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $design_token->label(),
      '#description' => $this->t("Label for the Design Token."),
      '#required' => TRUE,
    ];

    $form['type'] = [
      '#type' => 'select',
      '#default_value' => $design_token->getType(),
      '#title' => $this->t('Design Token type'),
      '#options' => [
        '1' => $this->t('Foundation'),
        '2' => $this->t('Context'),
        '3' => $this->t('Expression'),
      ],
        '#required' => TRUE,
      ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $design_token->id(),
      '#machine_name' => [
        'exists' => '\Drupal\design_token\Entity\DesignToken::load',
      ],
      '#disabled' => !$design_token->isNew(),
    ];

    $form['token'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Token'),
      '#default_value' => $design_token->getToken(),
      '#required' => TRUE,
    ];

    $form['value'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Value'),
      '#default_value' => $design_token->getValue(),
      '#required' => TRUE,
    ];

    // TODO: Add form['actions']['cancel']

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $design_token = $this->entity;
    $design_token_type = $design_token->getType();

    switch($design_token_type) {
      case 'foundation':
        // handle foundation token
        break;
      case 'context':
        // handle context token
        break;
      case 'expression':
        // handle expression token
        break;
    }
    $status = $design_token->save();

    if ($status) {
      $this->messenger()->addMessage($this->t('Saved the %label design token.', [
        '%label' => $design_token->label(),
      ]));
      }
    
    else {
      $this->messenger()->addMessage($this->t('The %label design token was not saved.', [
        '%label' => $design_token->label(),
      ]));
    }
    $form_state->setRedirect('entity.design_token.collection');
  }

}
