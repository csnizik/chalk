<?php

namespace Drupal\chalk_token\Annotation;

use Drupal\Component\Annotation\Plugin;

/**
 * Defines a Chalk token annotation object.
 *
 * @see \Drupal\chalk_token\Plugin\ChalkTokenPluginManager
 * @see plugin_api
 *
 * @Annotation
 */
class ChalkToken extends Plugin {
  /**
   * The plugin ID.
   *
   * @var string
   */
  public $id;

  /**
   * The name of the plugin.
   *
   * @var \Drupal\Core\Annotation\Translation
   *
   * @ingroup plugin_translatable
   */
  public $name;
}
