const processTokens = require('../../utils/processTokens')

const sizeScale = {
  fiero: 0.8,
  escort: 1,
  caprice: 1.1,
  delta88: 1.25,
  fleetwood: 1.4,
}

const baseValues = {
  fontSize: 1, // 16px in rem
  lineHeight: 1.5,
  padding: 0.5, // 8px in rem
  margin: 0.5, // 8px in rem
  borderWidth: 0.0625, // 1px in rem
  borderRadius: 0.25, // 4px in rem
  width: 10, // 160px in rem
  height: 5, // 80px in rem
  top: 1, // 16px in rem
  right: 1, // 16px in rem
  bottom: 1, // 16px in rem
  left: 1, // 16px in rem
}

const roundToTwoDecimalPlaces = (num) => {
  return Math.round(num * 100) / 100
}

const generateTokensForSize = (size) => {
  const scaleFactor = sizeScale[size]
  const tokens = {}

  for (const key in baseValues) {
    const valueInRem = roundToTwoDecimalPlaces(baseValues[key] * scaleFactor)
    tokens[key] = `${valueInRem}rem`
  }

  return tokens
}

const unit = {
  fiero: generateTokensForSize('fiero'),
  escort: generateTokensForSize('escort'),
  caprice: generateTokensForSize('caprice'),
  delta88: generateTokensForSize('delta88'),
  fleetwood: generateTokensForSize('fleetwood'),
}

module.exports = {
  founUnitSize: processTokens.generateTokens(unit),
}
