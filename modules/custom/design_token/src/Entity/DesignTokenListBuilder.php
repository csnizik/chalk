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
    $header['label'] = $this->t('Design Token');
    $header['id'] = $this->t('Machine name');
    $header['level'] = $this->t('Level');
    $header['token'] = $this->t('Token');
    $header['value'] = $this->t('Value');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\design_token\Entity\DesignToken */
    $row['label'] = [
      'data' => $entity->label(),
      'class' => ['menu-label']
    ];
    $row['id'] = $entity->id();
    $row['level'] = $entity->getLevel();
    $row['token'] = $entity->getToken();
    $row['value'] = $entity->getValue();
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

    // Reorder elements to have the button above the table
    // $build['#sorted'] = FALSE;
    // uasort($build, ['Drupal\Component\Utility\SortArray', 'sortByWeightElement']);

    $build['table']['#empty'] = $this->t('No design tokens available.');

    return $build;
  }
}
