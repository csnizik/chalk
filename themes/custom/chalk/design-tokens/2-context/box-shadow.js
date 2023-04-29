const processTokens = require('../../utils/processTokens')

const boxShadowColor = 'rgba(46, 46, 69, '

const boxShadow = {
  chihuahua: `$foun-unit-chihuahua-box-shadow-x $foun-unit-chihuahua-box-shadow-y $foun-unit-chihuahua-box-shadow-spread ${boxShadowColor}$foun-unit-chihuahua-box-shadow-opacity)`,
  yorkie: `$foun-unit-yorkie-box-shadow-x $foun-unit-yorkie-box-shadow-y $foun-unit-yorkie-box-shadow-spread ${boxShadowColor}$foun-unit-yorkie-box-shadow-opacity)`,
  beagle: `$foun-unit-beagle-box-shadow-x $foun-unit-beagle-box-shadow-y $foun-unit-yorkie-box-shadow-spread ${boxShadowColor}$foun-unit-beagle-box-shadow-opacity)`,
  pug: `$foun-unit-pug-box-shadow-x $foun-unit-pug-box-shadow-y $foun-unit-pug-box-shadow-spread ${boxShadowColor}$foun-unit-pug-box-shadow-opacity)`,
  boxer: `$foun-unit-boxer-box-shadow-x $foun-unit-boxer-box-shadow-y $foun-unit-boxer-box-shadow-spread ${boxShadowColor}$foun-unit-boxer-box-shadow-opacity)`,
  newfoundland: `$foun-unit-newfoundland-box-shadow-x $foun-unit-newfoundland-box-shadow-y $foun-unit-newfoundland-box-shadow-spread ${boxShadowColor}$foun-unit-newfoundland-box-shadow-opacity)`,
  mastiff: `$foun-unit-mastiff-box-shadow-x $foun-unit-mastiff-box-shadow-y $foun-unit-mastiff-box-shadow-spread ${boxShadowColor}$foun-unit-mastiff-box-shadow-opacity)`,
}

module.exports = { contBoxShadow: processTokens.generateTokens(boxShadow) }
