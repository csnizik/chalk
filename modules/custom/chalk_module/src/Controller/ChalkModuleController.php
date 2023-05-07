<?php

namespace Drupal\chalk_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Chalk Module routes.
 */
class ChalkModuleController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
