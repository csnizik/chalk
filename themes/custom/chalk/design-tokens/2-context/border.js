const processTokens = require('../../utils/processTokens')

const border = {
  style: {
    groove: 'groove',
    none: 'none',
    solid: 'solid',
  },
  radius: {
    fiero: `$foun-unit-size-fiero-border-radius`,
    escort: `$foun-unit-size-escort-border-radius`,
    aries: `$foun-unit-size-aries-border-radius`,
    regal: `$foun-unit-size-regal-border-radius`,
    continental: `$foun-unit-size-continental-border-radius`,
    fleetwood: `$foun-unit-size-fleetwood-border-radius`,
    suburban: `$foun-unit-size-suburban-border-radius`,
  },
  width: {
    fiero: `$foun-unit-size-fiero-border-width`,
    escort: `$foun-unit-size-escort-border-width`,
    aries: `$foun-unit-size-aries-border-width`,
    regal: `$foun-unit-size-regal-border-width`,
    continental: `$foun-unit-size-continental-border-width`,
    fleetwood: `$foun-unit-size-fleetwood-border-width`,
    suburban: `$foun-unit-size-suburban-border-width`,
  },
}

module.exports = { contBorder: processTokens.generateTokens(border) }
