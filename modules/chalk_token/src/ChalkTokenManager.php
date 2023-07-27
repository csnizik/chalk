<?php

namespace Drupal\chalk_token;

use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;

/**
 *
 */
class ChalkTokenManager extends DefaultPluginManager {

  /**
   *
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct('Plugin/ChalkToken', $namespaces, $module_handler, 'Drupal\chalk_token\Plugin\ChalkTokenInterface', 'Drupal\chalk_token\Annotation\ChalkToken');

    $this->alterInfo('chalk_token_info');
    $this->setCacheBackend($cache_backend, 'chalk_token_plugins');
  }

}
