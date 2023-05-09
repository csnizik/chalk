<?php

namespace Drupal\design_tokens\Form;

use Drupal\Core\Config\Entity\ConfigEntityStorageInterface;
use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\LanguageInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;


/**
 * Form controller for design tokens edit forms.
 * 
 * @ingroup design_tokens
 */
class DesignTokensForm extends EntityForm {

  /**
   * The design tokens storage.
   * 
   * @var \Drupal\Core\Config\Entity\ConfigEntityStorageInterface
   */
  protected $designTokenStorage;

  /**
   * Constructs a new design tokens form.
   * 
   * @param \Drupal\Core\Config\Entity\ConfigEntityStorageInterface $design_tokens_storage
   */
  public function __construct(ConfigEntityStorageInterface $design_tokens_storage) {
    $this->designTokenStorage = $design_tokens_storage;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')->getStorage('design_tokens')
    );
  }

  /**
   * Checks for an existing design token.
   * 
   * @param string|int $entity_id
   *  The entity ID.
   * @param array $element
   *  The form element.
   * 
   * @return bool
   *  TRUE if this design token already exists; FALSE otherwise.
   */
  public function exists($entity_id, array $element){
    return (bool) $this->designTokenStorage->load($entity_id);
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);

    $entity = $this->entity;
    // Populate defaults.
    if ($entity->isNew()) {
      $options = [
        'label' => 'Enter a label yo.',
        'level' => 'Choose a level yo.',
        'token' => 'Name the token yo.',
        'value' => 'Give it a value yo.'
      ];
    }
    else {
      // Populate from the existing entity.
      $options = $entity->getOptions();
    }

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      // '#default_value' => '$entity->label',
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      // '#default_value' => '$entity->id',
      '#disabled' => !$entity->isNew(),
      '#maxlength' => 64,
      '#description' => $this->t('A unique name for this design token. It must only contain lowercase letters, numbers and underscores.'),
      '#machine_name' => [
        'exists' => [
          $this,
          'exists'
        ]
      ]
        ];

    $form['level'] = [
      '#type' => 'select',
      '#title' => $this->t('Choose token level'),
      '#description' => $this->t('Specify whether token is Foundation, Context or Expression'),
      '#default_value' => $options['level'],
      '#options' => [
        '1' => $this->t('Foundation'),
        '2' => $this->t('Context'),
        '3' => $this->t('Expression'),
      ]
      ];
      $form['token'] = [
        '#type' => 'textfield',
        '#title' => $this->t('Token'),
        '#description' => $this->t('Unique token name'),
        // '#default_value' => '$entity->token',
      ];
      $form['value'] = [
        '#type' => 'textfield',
        '#title' => $this->t('Value'),
        '#description' => $this->t('Token value'),
        // '#default_value' => '$entity->value',
      ];
      print_r($entity);

      return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
    // TODO: add validation
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $entity = &$this->entity;

    $status = parent::save($form, $form_state);

    switch ($status) {
      case SAVED_NEW:
        $this->messenger()->addMessage($this->t('Created the %label Design Token yo.', [
          '%label' => $entity->label(),
        ]));
        break;

      default:
        $this->messenger()->addMessage($this->t('Saved the %label Design Token yo.', [
          '%label' => $entity->label(),
        ]));
    }
    $form_state->setRedirect('entity.design_token.collection');
  }


}