<?php

namespace Drupal\design_token\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Design Token entity.
 *
 * @ConfigEntityType(
 *   id = "design_token",
 *   label = @Translation("Design Token"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\design_token\Entity\DesignTokenListBuilder",
 *     "form" = {
 *       "add" = "Drupal\design_token\Form\DesignTokenForm",
 *       "edit" = "Drupal\design_token\Form\DesignTokenForm",
 *       "delete" = "Drupal\design_token\Form\DesignTokenDeleteForm",
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "design_token",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *   },
 *   config_export = {
 *      "id",
 *      "label",
 *      "level",
 *      "token",
 *      "value",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/design_tokens/{design_token}",
 *     "add-form" = "/admin/structure/design_tokens/add",
 *     "edit-form" = "/admin/structure/design_tokens/{design_token}/configure",
 *     "delete-form" = "/admin/structure/design_tokens/{design_token}/delete",
 *     "collection" = "/admin/structure/design_tokens",
 *   },
 * )
 */
class DesignToken extends ConfigEntityBase {

  /**
   * The Design Token ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Design Token label.
   *
   * @var string
   */
  protected $label;

  /**
   * The Design Token level.
   *
   * @var string
   */
  protected $level;

  public function getLevel() {
    return $this->level;
  }

  /**
   * The Design Token token.
   *
   * @var string
   */
  protected $token;

  public function getToken() {
    return $this->token;
  }

  /**
   * The Design Token value.
   *
   * @var string
   */
  protected $value;

  public function getValue() {
    return $this->value;
  }

}
