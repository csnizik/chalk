<?php

namespace Drupal\chalk_token\Plugin;

use Drupal\Component\Plugin\PluginBase;

/**
 * Base class for Chalk token plugins.
 */
abstract class ChalkTokenBase extends PluginBase implements ChalkTokenInterface {
  /**
   * {@inheritdoc}
   */
  public function getId() {
    return $this->pluginDefinition['id'];
  }
}
