<?php

namespace Drupal\design_token;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;

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
    $row['label'] = $entity->label();
    $row['id'] = $entity->id();
    $row['level'] = $entity->level;
    $row['token'] = $entity->token;
    $row['value'] = $entity->value;
    return $row + parent::buildRow($entity);
  }

}
