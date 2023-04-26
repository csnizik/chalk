const Color = require('color')

function invertLightness(color) {
  const hsl = Color(color).hsl().object()
  hsl.l = 100 - hsl.l
  return Color(hsl).hex()
}

module.exports = invertLightness
