<?php

namespace Drupal\chalk_token\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\chalk_token\ChalkTokenInterface;

/**
 * Defines the chalk token entity type.
 *
 * @ConfigEntityType(
 *   id = "chalk_token",
 *   label = @Translation("Chalk token"),
 *   label_collection = @Translation("Chalk tokens"),
 *   label_singular = @Translation("chalk token"),
 *   label_plural = @Translation("chalk tokens"),
 *   label_count = @PluralTranslation(
 *     singular = "@count chalk token",
 *     plural = "@count chalk tokens",
 *   ),
 *   handlers = {
 *     "list_builder" = "Drupal\chalk_token\ChalkTokenListBuilder",
 *     "form" = {
 *       "add" = "Drupal\chalk_token\Form\ChalkTokenForm",
 *       "edit" = "Drupal\chalk_token\Form\ChalkTokenForm",
 *       "delete" = "Drupal\Core\Entity\EntityDeleteForm"
 *     }
 *   },
 *   config_prefix = "chalk_token",
 *   admin_permission = "administer chalk_token",
 *   links = {
 *     "collection" = "/admin/structure/chalk-token",
 *     "add-form" = "/admin/structure/chalk-token/add",
 *     "edit-form" = "/admin/structure/chalk-token/{chalk_token}",
 *     "delete-form" = "/admin/structure/chalk-token/{chalk_token}/delete"
 *   },
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   config_export = {
 *     "id",
 *     "label",
 *     "description"
 *   }
 * )
 */
class ChalkToken extends ConfigEntityBase implements ChalkTokenInterface {

  /**
   * The chalk token ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The chalk token label.
   *
   * @var string
   */
  protected $label;

  /**
   * The chalk token status.
   *
   * @var bool
   */
  protected $status;

  /**
   * The chalk_token description.
   *
   * @var string
   */
  protected $description;

  /**
   * The chalk_token type.
   *
   * @var string
   */
  protected $token_type;

  /**
   * Set the value of the token type field.
   *
   * @param string $value
   *   The new value for the token type field.
   *
   * @return $this
   */
  public function setTokenType($value) {
    $allowed_values = ['1' => 'foundation', '2' => 'framework', '3' => 'feature'];
    if (!in_array($value, $allowed_values)) {
      throw new \InvalidArgumentException('Invalid token type value.');
    }

    $this->token_type = $value;
    return $this;
  }
}
