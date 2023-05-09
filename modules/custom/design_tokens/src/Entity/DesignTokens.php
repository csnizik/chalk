<?php

namespace Drupal\design_tokens\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Design Tokens config entity.
 * 
 * @ingroup design_tokens
 * 
 * @ConfigEntityType(
 *  id = "design_tokens",
 *  label = @Translation("Design Tokens"),
 *  handlers = {
 *    "list_builder" = "Drupal\design_tokens\Entity\DesignTokensListBuilder",
 *    "form" = {
 *      "default" = "Drupal\design_tokens\Form\DesignTokensForm",
 *      "add" = "Drupal\design_tokens\Form\DesignTokensForm",
 *      "edit" = "Drupal\design_tokens\Form\DesignTokensForm",
 *      "delete" = "Drupal\design_tokens\Form\DesignTokensDeleteForm",  
 *    },
 *    "access" = "Drupal\design_tokens\Entity\DesignTokensAccessControlHandler",
 *    "route_provider" = {
 *      "html" = "Drupal\design_tokens\Entity\DesignTokensHtmlRouteProvider",
 *    },
 *  },
 *  admin_permission = "administer site configuration",
 *  list_cache_tags = { "rendered" },

 *  entity_keys = {
 *    "id" = "id",
 *    "label" = "label",
 *    "level" = "level",
 *    "token" = "token",
 *    "value" = "value",  
 *   },
 *  links = {
 *    "canonical" = "/admin/structure/design_tokens/{design_token}",
 *    "add-form" = "/admin/structure/design_tokens/add",
 *    "edit-form" = "/admin/structure/design_tokens/{design_token}/configure",
 *    "delete-form" = "/admin/structure/design_tokens/{design_token}/delete",
 *    "collection" = "/admin/structure/design_tokens",
 *  },
 *  config_export = {
 *    "id",
 *    "label",
 *    "level",
 *    "token",
 *    "value",
 *    },
 * )
 */

 class DesignTokens extends ConfigEntityBase {

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

  /**
   * The Design Token token.
   * 
   * @var string
   */
  protected $token;

  /**
   * The Design Token value.
   * 
   * @var string
   */
  protected $value;

  /**
   * {@inheritdoc}
   */
  public function getLevel() {
    return $this->get('level')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setLevel($level) {
    $this->set('level', $level);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getToken() {
    return $this->get('token')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setToken($token){
    $this->set('token', $token);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getValue() {
    return $this->get('value')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setValue($value){
    $this->set('value', $value);
    return $this;
  }

  /**
   * Return an array of the keys used by Design Tokens.
   */
  protected function getAllKeys() {
    return [
      'level',
      'token',
      'value'
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTagsToInvalidate()
  {
    return ['rendered']; //TODO: confirm this
  }
 }