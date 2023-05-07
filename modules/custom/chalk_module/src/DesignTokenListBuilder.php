<?php

namespace Drupal\chalk_module;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;

/**
 * Provides a listing of DesignToken entities.
 */
class DesignTokenListBuilder extends ConfigEntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Design Token');
    $header['token_name'] = $this->t('Token Name');
    $header['token_value'] = $this->t('Token Value');
    $header['category'] = $this->t('Category');
    $header['description'] = $this->t('Description');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /** @var \Drupal\chalk_module\Entity\DesignToken $entity */
    $row['label'] = $entity->label();
    $row['token_name'] = $entity->getTokenName();
    $row['token_value'] = $entity->getTokenValue();
    $row['category'] = $entity->getCategory();
    $row['description'] = $entity->getDescription();
    return $row + parent::buildRow($entity);
  }

}
