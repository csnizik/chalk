const processTokens = require('../../utils/processTokens')

const sizeScale = {
  fiero: 0.5,
  escort: 0.7,
  aries: 0.8,
  regal: 1,
  continental: 1.2,
  fleetwood: 1.5,
  suburban: 2,
}

const baseValues = {
  fontSize: 1,
  lineHeight: 1.5,
  padding: 0.5,
  margin: 0.5,
  borderWidth: 0.0625,
  borderRadius: 0.25,
  width: 10,
  height: 5,
  top: 1,
  right: 1,
  bottom: 1,
  left: 1,
  boxShadowX: 0.125,
  boxShadowY: 0.222,
  boxShadowBlur: 0.33,
  boxShadowSpread: 0.5,
  boxShadowOpacity: 0.5,
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
  fiero: generateTokensForSize('fiero'),
  escort: generateTokensForSize('escort'),
  aries: generateTokensForSize('aries'),
  regal: generateTokensForSize('regal'),
  continental: generateTokensForSize('continental'),
  fleetwood: generateTokensForSize('fleetwood'),
  suburban: generateTokensForSize('suburban'),
}

module.exports = {
  founUnitSize: processTokens.generateTokens(unit),
}
