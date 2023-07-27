<?php

namespace Drupal\chalk_token\Plugin\ChalkToken;

use Drupal\chalk_token\Plugin\ChalkTokenInterface;
use Drupal\Component\Plugin\PluginBase;

/**
 * Provides a demo chalk token.
 *
 * @ChalkToken(
 *   id = "demo",
 *   label = @Translation("Demo"),
 * )
 */
class Demo extends PluginBase implements ChalkTokenInterface {

  /**
   * {@inheritdoc}
   */
  public function execute() {
    // Your custom logic here...
  }

}
