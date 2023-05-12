<?php

namespace Drupal\design_token\Entity;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

/**
 * Provides an interface for defining Design token type entities.
 */
interface DesignTokenTypeInterface extends ConfigEntityInterface {

  // Add get/set methods for your configuration properties here.
  
  /**
   * Gets the design token type ID.
   *
   * @return string
   *   The design token type ID.
   */
  public function id();

  /**
   * Gets the design token type label.
   *
   * @return string
   *   Label of the design token type.
   */
  public function label();

}
