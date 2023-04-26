const Color = require('color')
const colorTokens = require('../../design-tokens/1-foundation/color')

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const colorKey = camelToKebab(Object.keys(colorTokens)[0])
const colorPrefix = `$${colorKey}-`
const allColors = Object.values(colorTokens)[0]
const allTokens = Object.entries(allColors)

const wcagAAMinContrast = 4.5
const wcagAALargeTextMinContrast = 3
const wcagAMinContrast = 2

function getColorMood(hsl) {
  const [, saturation, lightness] = hsl

  // Authoritative: Low lightness
  if (lightness < 35) {
    return 'a'
  }

  // Neutral: Low saturation
  if (saturation < 25) {
    return 'b'
  }

  // Whimsical: High saturation and lightness
  if (saturation > 50 && lightness > 50) {
    return 'c'
  }

  return 'other'
}

function generateColorContrasts(bgColor) {
  const bgToken = allTokens.find(
    (token) => `${colorPrefix}${token[0]}` === bgColor
  )

  if (bgToken) {
    const bgValue = bgToken[1].value
    const contrasts = allTokens
      .map((token) => {
        const tokenName = token[0]
        const tokenValue = token[1].value
        const contrast = Color(bgValue).contrast(Color(tokenValue))
        const mood = getColorMood(Color(tokenValue).hsl().array())
        return { tokenName, contrast, tokenValue, mood }
      })
      .filter(({ mood }) => mood !== 'other')
      .sort((a, b) => b.contrast - a.contrast)

    const contrastLevels = { best: {}, better: {}, good: {} }

    for (const level of ['best', 'better', 'good']) {
      for (const mood of ['a', 'b', 'c']) {
        const matchingMoods = contrasts.filter(
          (contrast) => contrast.mood === mood
        )

        if (matchingMoods.length > 0) {
          const selectedItem = matchingMoods.shift()
          const contrastValue = selectedItem.contrast
          const colorName = `${colorPrefix}${selectedItem.tokenName}`

          contrastLevels[level][mood] = colorName

          if (
            contrastValue < wcagAAMinContrast &&
            contrastValue >= wcagAALargeTextMinContrast
          ) {
            console.log(`${colorName} has a contrast value of ${contrastValue}`)
          } else if (
            contrastValue < wcagAALargeTextMinContrast &&
            contrastValue >= wcagAMinContrast
          ) {
            console.log(
              `${colorName} has a contrast value of ${contrastValue} which only meets WCAG (A) minimum contrast`
            )
          } else if (contrastValue < wcagAMinContrast) {
            console.log(
              `${colorName} has a contrast value of ${contrastValue} which doesn't meet WCAG (A) minimum`
            )
          }
        }
      }
    }

    return contrastLevels
  }
}

module.exports = generateColorContrasts
