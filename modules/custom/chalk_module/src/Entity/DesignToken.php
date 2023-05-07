<?php

namespace Drupal\chalk_module\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;

/**
 * Defines the Design Token entity.
 *
 * @ConfigEntityType(
 *   id = "design_token",
 *   label = @Translation("Design Token"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\chalk_module\DesignTokenListBuilder",
 *     "form" = {
 *       "add" = "Drupal\chalk_module\Form\DesignTokenForm",
 *       "edit" = "Drupal\chalk_module\Form\DesignTokenForm",
 *       "delete" = "Drupal\chalk_module\Form\DesignTokenDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\chalk_module\DesignTokenHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "design_token",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/design_token/{design_token}",
 *     "add-form" = "/admin/structure/design_token/add",
 *     "edit-form" = "/admin/structure/design_token/{design_token}/edit",
 *     "delete-form" = "/admin/structure/design_token/{design_token}/delete",
 *     "collection" = "/admin/structure/design_token"
 *   }
 * )
 */
class DesignToken extends ConfigEntityBase {

  /**
   * @var string
   */
  protected $id;

  /**
   * @var string
   */
  protected $label;

  /**
   * @var string
   */
  protected $token_name;

  /**
   * @var string
   */
  protected $token_value;

  /**
   * @var string
   */
  protected $category;

  /**
   * @var string
   */
  protected $description;

  public function getLabel() {
    return $this->label;
  }

  public function setLabel($label) {
    $this->label = $label;
    return $this;
  }

  public function getTokenName() {
    return $this->token_name;
  }

  public function setTokenName($token_name) {
    $this->token_name = $token_name;
    return $this;
  }

  public function getTokenValue() {
    return $this->token_value;
  }

  public function setTokenValue($token_value) {
    $this->token_value = $token_value;
    return $this;
  }

  public function getCategory() {
    return $this->category;
  }

  public function setCategory($category) {
    $this->category = $category;
    return $this;
  }

  public function getDescription() {
    return $this->description;
  }

  public function setDescription($description) {
    $this->description = $description;
    return $this;
  }

}
