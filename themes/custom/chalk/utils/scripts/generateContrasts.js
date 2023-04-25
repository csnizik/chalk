const tinycolor = require('tinycolor2')
const colorTokens = require('../../design-tokens/1-framework/color')

console.log('hi', colorTokens)

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
  const bgToken = allTokens.find(
    (token) => `${colorPrefix}${token[0]}` === bgColor
  )
  if (bgToken) {
    const bgValue = bgToken[1].value
    const contrasts = allTokens.map((token) => {
      const tokenName = token[0]
      const tokenValue = token[1].value
      const contrast = tinycolor.readability(bgValue, tokenValue)
      return { tokenName, contrast }
    })

    const sortedContrasts = contrasts.sort((a, b) => b.contrast - a.contrast)

    const topContrastColors = {
      good: colorPrefix + sortedContrasts[2]?.tokenName || '',
      better: colorPrefix + sortedContrasts[1]?.tokenName || '',
      best: colorPrefix + sortedContrasts[0]?.tokenName || '',
    }
    console.log('hi again', topContrastColors)
    return topContrastColors
  }
}

module.exports = generateContrasts
