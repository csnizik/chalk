<?php

namespace Drupal\chalk_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Chalk routes.
 */
class ChalkModuleController extends ControllerBase {

  /**
   * Foundation.
   *
   * @return array
   *   Return foundation tokens page.
   */
  public function foundation() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Foundation Tokens Page'),
    ];
  }

  /**
   * Framework.
   *
   * @return array
   *   Return framework tokens page.
   */
  public function framework() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Framework Tokens Page'),
    ];
  }

  /**
   * Feature.
   *
   * @return array
   *   Return feature tokens page.
   */
  public function feature() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Feature Tokens Page'),
    ];
  }

}
