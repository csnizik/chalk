const processTokens = require('../../utils/processTokens')

const sizeScale = {
  chihuahua: 0.5,
  yorkie: 0.8625,
  beagle: 1.225,
  pug: 1.5875,
  boxer: 1.95,
  newfoundland: 2.3125,
  mastiff: 2.675,
}

const baseValues = {
  fontSize: 1,
  lineHeight: 1.5,
  padding: 0.5,
  margin: 0.5,
  borderWidth: 0.3,
  borderRadius: 0.8,
  width: 8,
  height: 5,
  top: 1,
  right: 1,
  bottom: 1,
  left: 1,
  boxShadowX: 0.125,
  boxShadowY: 0.44,
  boxShadowBlur: 0.9,
  boxShadowSpread: 1,
  boxShadowOpacity: 0.3,
}

const roundToTwoDecimalPlaces = (num) => {
  return Math.round(num * 100) / 100
}

const generateTokensForSize = (size) => {
  const scaleFactor = sizeScale[size]
  const tokens = {}

  for (const key in baseValues) {
    const scaledValue = roundToTwoDecimalPlaces(baseValues[key] * scaleFactor)
    tokens[key] = key === 'boxShadowOpacity' ? scaledValue : `${scaledValue}rem`
  }

  return tokens
}

const unit = {
  chihuahua: generateTokensForSize('chihuahua'),
  yorkie: generateTokensForSize('yorkie'),
  beagle: generateTokensForSize('beagle'),
  pug: generateTokensForSize('pug'),
  boxer: generateTokensForSize('boxer'),
  newfoundland: generateTokensForSize('newfoundland'),
  mastiff: generateTokensForSize('mastiff'),
}

module.exports = {
  founUnit: processTokens.generateTokens(unit),
}
