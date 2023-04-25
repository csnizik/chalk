const tinycolor = require('tinycolor2')

const generateNestedShades = (prefix, nestedColors, skipShades = false) => {
  return Object.entries(nestedColors).reduce((r, [colorKey, colorValue]) => {
    const formattedColorKey = colorKey
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()

    if (typeof colorValue === 'object' && !tinycolor(colorValue).isValid()) {
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

    const shades = {
      20: tinycolor(colorValue).lighten(30).toString(),
      40: tinycolor(colorValue).lighten(25).toString(),
      50: tinycolor(colorValue).lighten(22).toString(),
      60: tinycolor(colorValue).lighten(20).toString(),
      80: tinycolor(colorValue).lighten(10).toString(),
      100: colorValue,
    }

    const filteredShades = Object.entries(shades).reduce(
      (acc, [shadeKey, shadeValue]) => {
        // TODO - this disallows white as a shade but #FFFFFE would be generated, which has no visual difference to white. Improve this test to make sure we don't generate shades that are indistinguishable from existing tokenized colors.
        if (shadeValue !== '#FFFFFF') {
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
