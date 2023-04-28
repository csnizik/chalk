const processTokens = require('../../utils/processTokens')

// Using em here instead of rem for more accurate proportional sizing

const border = {
  style: {
    groove: 'groove',
    none: 'none',
    solid: 'solid',
  },
  radius: {
    fiero: `$foun-unit-size-fiero-border-radius`,
    escort: `$foun-unit-size-escort-border-radius`,
    caprice: `$foun-unit-size-caprice-border-radius`,
    delta88: `$foun-unit-size-delta88-border-radius`,
    fleetwood: `$foun-unit-size-fleetwood-border-radius`,
  },
  width: {
    fiero: `$foun-unit-size-fiero-border-width`,
    escort: `$foun-unit-size-escort-border-width`,
    caprice: `$foun-unit-size-caprice-border-width`,
    delta88: `$foun-unit-size-delta88-border-width`,
    fleetwood: `$foun-unit-size-fleetwood-border-width`,
  },
}

module.exports = { contBorder: processTokens.generateTokens(border) }
