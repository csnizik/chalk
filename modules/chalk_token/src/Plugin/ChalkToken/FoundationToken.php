<?php

namespace Drupal\chalk_token\Plugin\ChalkToken;

use Drupal\chalk_token\Plugin\ChalkTokenBase;

/**
 * Provides a 'Foundation' ChalkToken.
 *
 * @ChalkToken(
 *   id = "foundation",
 *   label = @Translation("Foundation"),
 * )
 */
class FoundationToken extends ChalkTokenBase {

  /**
   * {@inheritdoc}
   */
  public function createToken($input) {
    // Here you can implement the logic to create the foundation token
    // from the $input.
    // This is just an example. Replace this with your actual logic.
    $token = 'foundation_' . base64_encode($input);
    return $token;
  }

}
