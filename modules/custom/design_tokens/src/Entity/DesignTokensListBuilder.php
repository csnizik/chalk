<?php

namespace Drupal\design_tokens\Entity;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of Design Tokens.
 * 
 * @ingroup design_tokens
 */
class DesignTokensListBuilder extends EntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Label');
    $header['level'] = $this->t('Level');
    $header['token'] = $this->t('Token');
    $header['value'] = $this->t('Value');
  }

  /**
   * @inheritdoc
   */
  public function buildRow(EntityInterface $entity) {
    $row['query'] = Link::createFromRoute(
      $entity->label(),
      'entity.design_token.edit_form',
      ['design_token' => $entity->id()]
    );
    // Show a preview.
    $row['label']['data'] = $entity->get('label');
    $row['level']['data'] = $entity->get('level');
    $row['token']['data'] = $entity->get('token');
    $row['value']['data'] = $entity->get('value');
    return $row + parent::buildRow($entity);
  }

  // TODO: makeLinksFromRef? see smart_datelistbuilder.
}