const processTokens = require('../../utils/processTokens')

const getBorderObject = (dimension) => {
  return {
    chihuahua: `$foun-unit-chihuahua-border-${dimension}`,
    yorkie: `$foun-unit-yorkie-border-${dimension}`,
    beagle: `$foun-unit-beagle-border-${dimension}`,
    pug: `$foun-unit-pug-border-${dimension}`,
    boxer: `$foun-unit-boxer-border-${dimension}`,
    newfoundland: `$foun-unit-newfoundland-border-${dimension}`,
    mastiff: `$foun-unit-mastiff-border-${dimension}`,
  }
}

const border = {
  style: {
    groove: 'groove',
    none: 'none',
    solid: 'solid',
  },
  radius: getBorderObject('radius'),
  width: getBorderObject('width'),
}

module.exports = { frameworkBorder: processTokens.generateTokens(border) }
