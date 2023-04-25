const Color = require('color')
const colorTokens = require('../../design-tokens/1-framework/color')

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const colorKey = camelToKebab(Object.keys(colorTokens)[0])
const colorPrefix = `$${colorKey}-`
const allColors = Object.values(colorTokens)[0]
const allTokens = Object.entries(allColors)

const wcagAAMinContrast = 4.5
const wcagAALargeTextMinContrast = 3

function generateContrasts(bgColor) {
  const bgToken = allTokens.find(
    (token) => `${colorPrefix}${token[0]}` === bgColor
  )

  if (bgToken) {
    const bgValue = bgToken[1].value
    const contrasts = allTokens.map((token) => {
      const tokenName = token[0]
      const tokenValue = token[1].value
      const contrast = Color(bgValue).contrast(Color(tokenValue))
      return { tokenName, contrast, tokenValue }
    })

    const sortedContrasts = contrasts.sort((a, b) => b.contrast - a.contrast)

    let bestIndex = sortedContrasts.findIndex(
      (contrast) => contrast.contrast >= wcagAAMinContrast
    )
    let betterIndex = sortedContrasts.findIndex(
      (contrast, index) =>
        contrast.contrast >= wcagAALargeTextMinContrast && index !== bestIndex
    )
    let goodIndex = sortedContrasts.findIndex(
      (contrast, index) => index !== bestIndex && index !== betterIndex
    )

    const topContrastColors = {
      best: colorPrefix + sortedContrasts[bestIndex]?.tokenName || '',
    }

    if (betterIndex >= 0) {
      topContrastColors.better =
        colorPrefix + sortedContrasts[betterIndex]?.tokenName
    }

    if (goodIndex >= 0) {
      topContrastColors.good =
        colorPrefix + sortedContrasts[goodIndex]?.tokenName
    }

    return topContrastColors
  }
}

module.exports = generateContrasts
