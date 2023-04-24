const tinycolor = require('tinycolor2')
const colorTokens = require('../../design-tokens/1-framework/color')

function camelToKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between lower and uppercase letters
    .toLowerCase() // Convert the resulting string to lowercase
}

// TODO This needs to be revisited for type safety; convert entire project to TS(?)
const colorKey = camelToKebab(Object.keys(colorTokens)[0])
const colorPrefix = `$${colorKey}-`
const allColors = Object.values(colorTokens)[0]
const allTokens = Object.entries(allColors)

function generateContrasts(bgColor) {
  const contrasts = allTokens.map(([tokenName, value]) => {
    const contrast = tinycolor.readability(bgColor, value)
    return { tokenName, contrast }
  })

  const sortedContrasts = contrasts.sort((a, b) => b.contrast - a.contrast)

  const topContrastColors = {
    good: colorPrefix + sortedContrasts[2]?.tokenName || '',
    better: colorPrefix + sortedContrasts[1]?.tokenName || '',
    best: colorPrefix + sortedContrasts[0]?.tokenName || '',
  }
  return topContrastColors
}

module.exports = generateContrasts
