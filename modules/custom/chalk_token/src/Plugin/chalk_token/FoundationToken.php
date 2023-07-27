<?php

namespace Drupal\chalk_token\Plugin\chalk_token;

use Drupal\chalk_token\Plugin\ChalkTokenBase;
use Drupal\chalk_token\Plugin\ChalkTokenInterface;
use Druapal\chalk_token\Annotation\ChalkToken;

/**
 * Provides a FoundationToken implementation of a chalk_token.
 *
 * @ChalkToken(
 *   id = "foundation",
 *   name = @Translation("Foundation Token"),
 * )
 */
class FoundationToken extends ChalkTokenBase implements ChalkTokenInterface {

  /**
   * The data for this plugin.
   *
   * @var array
   */
  protected $data = [];

  /**
   * Get the data for this plugin.
   *
   * @return array
   *   The data for this plugin.
   */
  public function getData() {
    return $this->data;
  }

  /**
   * Set the data for this plugin.
   *
   * @param array $data
   *   The data for this plugin.
   */
  public function setData(array $data) {
    $this->data = $data;
  }

}
