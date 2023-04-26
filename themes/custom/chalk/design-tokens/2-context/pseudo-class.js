const processTokens = require('../../utils/processTokens')

const pseudoClass = {
  input: {
    disabled: {
      color: `$cont-color-status-disabled`,
    },
    checked: {
      border: `$cont-border-style-none`,
      backgroundColor: `$cont-color-status-success`,
    },
    valid: {
      border: `$cont-border-style-solid $cont-color-status-success`,
    },
    invalid: {
      border: `$cont-border-style-solid $cont-color-status-error`,
    },
    required: {
      border: `$cont-border-style-solid $cont-color-status-info`,
    },
  },
  location: {
    link: {
      color: `$foun-color-brand-mardigras-140`,
    },
    visited: {
      color: `$foun-color-brand-mardigras-60`,
    },
  },
  interaction: {
    active: {
      boxShadow: `$cont-box-shadow-elevated3`,
      borderWeight: `$cont-border-width-lg`,
      borderColor: `$foun-color-brand-black`,
    },
    hover: {
      backgroundColor: `$foun-color-brand-mardigras-60`,
    },
    focus: {
      backgroundColor: `$foun-color-brand-neutral-deltablue`,
      borderWeight: `$cont-border-width-lg`,
    },
  },
}

module.exports = { contPseudoClass: processTokens.generateTokens(pseudoClass) }
