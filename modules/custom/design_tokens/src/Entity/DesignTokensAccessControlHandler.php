<?php 

namespace Drupal\design_tokens\Entity;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Defines the access control handler for the design token entity type.
 * 
 * @see \Drupal\design_tokens\Entity\DesignTokens
 */
class DesignTokenAccessControlHandler extends EntityAccessControlHandler {
  /**
   * {@inheritdoc}
   */
  protected $viewLabelOperation = TRUE;

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {

    // No restrictions on viewing a label of a design token.
    if ($operation === 'view label') {
      return AccessResult::allowed();
    }
    elseif (in_array($operation, [
      'delete'
    ])) {
      if ($entity->label() == 'default') {
        return AccessResult::forbidden('The Design Token config entry can not be deleted.')->addCacheableDependency($entity);
      }
      else {
        return parent::checkAccess($entity, $operation, $account)
          ->addCacheableDependency($entity);

      }
    }
    return parent::checkAccess($entity, $operation, $account);
  }
}