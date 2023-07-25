const processTokens = require('../../utils/processTokens')

const getSizeObject = (dimension) => {
  return {
    none: '0',
    full: '100%',
    chihuahua: `$foun-unit-chihuahua-${dimension}`,
    yorkie: `$foun-unit-yorkie-${dimension}`,
    beagle: `$foun-unit-beagle-${dimension}`,
    pug: `$foun-unit-pug-${dimension}`,
    boxer: `$foun-unit-boxer-${dimension}`,
    newfoundland: `$foun-unit-newfoundland-${dimension}`,
    mastiff: `$foun-unit-mastiff-${dimension}`,
  }
}

const size = {
  width: getSizeObject('width'),
  maxWidth: getSizeObject('width'),
  minWidth: getSizeObject('width'),
  height: getSizeObject('height'),
  maxHeight: getSizeObject('height'),
  minHeight: getSizeObject('height'),
}

module.exports = { frameworkSize: processTokens.generateTokens(size) }
