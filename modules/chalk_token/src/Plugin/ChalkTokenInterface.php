<?php

namespace Drupal\chalk_token\Plugin;

use Drupal\Component\Plugin\PluginInspectionInterface;

interface ChalkTokenInterface extends PluginInspectionInterface {
  public function execute();
}
