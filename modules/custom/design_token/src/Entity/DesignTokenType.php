<?php

namespace Drupal\design_token\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBundleBase;

/**
 * Defines the Design token type entity.
 *
 * @ConfigEntityType(
 *   id = "design_token_type",
 *   label = @Translation("Design token type"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\design_token\DesignTokenTypeListBuilder",
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "design_token_type",
 *   admin_permission = "administer site configuration",
 *   bundle_of = "design_token",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 * )
 */
class DesignTokenType extends ConfigEntityBundleBase implements DesignTokenTypeInterface {

  /**
   * The Design token type ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Design token type label.
   *
   * @var string
   */
  protected $label;

}
