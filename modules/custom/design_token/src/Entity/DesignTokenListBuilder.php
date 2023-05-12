<?php

namespace Drupal\design_token\Entity;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Url;

/**
 * Provides a listing of Design Token entities.
 */
class DesignTokenListBuilder extends ConfigEntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['type'] = $this->t('Type');
    $header['label'] = $this->t('Label');
    $header['id'] = $this->t('Machine name');
    $header['token'] = $this->t('Token');
    $header['value'] = $this->t('Value');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\design_token\Entity\DesignToken */
    $row['type'] = [
      'data' => $entity->getType(),
      'class' => ['menu-label'],
    ];
    $row['label'] = [
      'data' => $entity->label(),
      'class' => ['menu-label']
    ];
    $row['id'] = [
      'data' => $entity->id(),
      'class' => ['menu-label'],
    ];
    $row['token'] = [
      'data' => $entity->getToken(),
      'class' => ['menu-label'],
    ];
    $row['value'] = [
      'data' => $entity->getValue(),
      'class' => ['menu-label'],
    ];
    return $row + parent::buildRow($entity);
  }

  /**
   * {@inheritdoc}
   */
  public function render() {
    $build = parent::render();

    // Add the "Add new design token" button
    $build['add_design_token'] = [
      '#type' => 'link',
      '#title' => $this->t('Add new design token'),
      '#url' => Url::fromRoute('entity.design_token.add_form'),
      '#attributes' => ['class' => ['button', 'button--primary']],
      '#weight' => '-99999',
    ];

    $build['table']['#empty'] = $this->t('No design tokens available.');

    return $build;
  }
}
