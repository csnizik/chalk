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

function getColorMood(hsl) {
  const [hue, saturation, lightness] = hsl

  // Whimsical: High saturation and lightness
  if (saturation > 50 && lightness > 50) {
    return 'whimsical'
  }

  // Neutral: Low saturation
  if (saturation < 25) {
    return 'neutral'
  }

  // Authoritative: Low lightness
  if (lightness < 35) {
    return 'authoritative'
  }

  return 'other'
}

function generateMoodContrasts(bgColor) {
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

    const moodColors = { whimsical: {}, neutral: {}, authoritative: {} }

    for (const mood of ['whimsical', 'neutral', 'authoritative']) {
      const moodContrasts = contrasts.filter(
        (contrast) => contrast.mood === mood
      )

      if (moodContrasts.length > 0) {
        moodColors[mood].good = colorPrefix + moodContrasts[0].tokenName
      }
      if (
        moodContrasts.length > 1 &&
        moodContrasts[1].contrast >= wcagAALargeTextMinContrast
      ) {
        moodColors[mood].better = colorPrefix + moodContrasts[1].tokenName
      }
      if (
        moodContrasts.length > 2 &&
        moodContrasts[2].contrast >= wcagAAMinContrast
      ) {
        moodColors[mood].best = colorPrefix + moodContrasts[2].tokenName
      }
    }

    return moodColors
  }
}

module.exports = generateMoodContrasts
