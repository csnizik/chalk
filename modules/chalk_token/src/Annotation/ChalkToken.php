<?php

namespace Drupal\chalk_token\Annotation;

use Drupal\Component\Annotation\Plugin;

/**
 * Defines a ChalkToken item annotation object.
 *
 * @see \Drupal\chalk_token\ChalkTokenManager
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
   * The label of the plugin.
   *
   * @var \Drupal\Core\Annotation\Translation
   *
   * @ingroup plugin_translatable
   */
  public $label;

}
