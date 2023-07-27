<?php

namespace Drupal\chalk_token\Plugin;

use Drupal\Component\Plugin\PluginInspectionInterface;

/**
 * Defines an interface for Chalk token plugins.
 */
interface ChalkTokenInterface extends PluginInspectionInterface {

  /**
   * Return the id of the plugin.
   *
   * @return string
   */
  public function getId();
}
