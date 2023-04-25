const Color = require('color')

// Generates shades for each color and skips generating shades when specified
const generateNestedShades = (prefix, nestedColors, skipShades = false) => {
  return Object.entries(nestedColors).reduce((r, [colorKey, colorValue]) => {
    const formattedColorKey = colorKey
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()

    if (typeof colorValue === 'object') {
      const nestedSkipShades = colorKey === 'true'
      const nestedShades = generateNestedShades(
        `${prefix}-${formattedColorKey}`,
        colorValue,
        nestedSkipShades
      )
      return {
        ...r,
        ...nestedShades,
      }
    }

    if (formattedColorKey === 'black' || formattedColorKey === 'white') {
      return {
        ...r,
        [`${prefix}-${formattedColorKey}`]: { value: colorValue },
      }
    }

    if (skipShades) {
      return {
        ...r,
        [`${prefix}-${formattedColorKey}`]: { value: colorValue },
      }
    }

    const currColor = Color(colorValue)
    const baseLuminosity = currColor.luminosity()
    const lightenStep = (1 - baseLuminosity) / 5
    const darkenStep = baseLuminosity / 3
    const whiteThreshold = 0.9
    const blackThreshold = 0.04

    const shades = {
      100: colorValue,
    }

    const lightenShades = [
      currColor.lighten(lightenStep * 4),
      currColor.lighten(lightenStep * 3),
      currColor.lighten(lightenStep * 2),
      currColor.lighten(lightenStep * 1),
    ]

    const darkenShades = [
      currColor.darken(darkenStep * 1),
      currColor.darken(darkenStep * 2),
    ]

    const shadeKeys = [20, 40, 60, 80, 120, 140]

    // Checks if the luminosity difference between two shades is valid
    const isLuminosityDifferenceValid = (shade1, shade2) => {
      return (
        Math.abs(shade1.luminosity() - shade2.luminosity()) > blackThreshold
      )
    }

    let prevShade = currColor
    for (let i = 0; i < 4; i++) {
      if (
        lightenShades[i].luminosity() < whiteThreshold &&
        isLuminosityDifferenceValid(lightenShades[i], prevShade)
      ) {
        shades[shadeKeys[i]] = lightenShades[i].hex().toString()
        prevShade = lightenShades[i]
      }
    }

    prevShade = currColor
    for (let i = 0; i < 2; i++) {
      if (
        darkenShades[i].luminosity() > blackThreshold &&
        isLuminosityDifferenceValid(darkenShades[i], prevShade)
      ) {
        shades[shadeKeys[i + 4]] = darkenShades[i].hex().toString()
        prevShade = darkenShades[i]
      }
    }

    // Filter shades to make sure no pure whites or pure blacks are included, then create the final object.
    const filteredShades = Object.entries(shades).reduce(
      (acc, [shadeKey, shadeValue]) => {
        if (shadeValue !== '#FFFFFF' && shadeValue !== '#000000') {
          acc[
            `${prefix}-${formattedColorKey}${
              shadeKey !== '100' ? '-' + shadeKey : ''
            }`
          ] = {
            value: shadeValue,
          }
        }
        return acc
      },
      {}
    )

    return {
      ...r,
      ...filteredShades,
    }
  }, {})
}

// Generates color shades for each color in the colors object
const generateColorShades = (colors) => {
  return Object.keys(colors).reduce((result, prefix) => {
    const nestedColors = colors[prefix]
    const nestedShades = generateNestedShades(prefix, nestedColors)
    return {
      ...result,
      ...nestedShades,
    }
  }, {})
}

module.exports = generateColorShades
