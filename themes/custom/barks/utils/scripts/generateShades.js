const Color = require('tinycolor2')

const generateNestedShades = (prefix, nestedColors, skipShades = false) => {
  return Object.entries(nestedColors).reduce((r, [colorKey, colorValue]) => {
    const formattedColorKey = colorKey
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()

    if (typeof colorValue === 'object' && !Color(colorValue).isValid()) {
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
      20: Color(colorValue).lighten(30).toString(),
      40: Color(colorValue).lighten(25).toString(),
      50: Color(colorValue).lighten(22).toString(),
      60: Color(colorValue).lighten(20).toString(),
      80: Color(colorValue).lighten(10).toString(),
      100: colorValue,
    }

    const filteredShades = Object.entries(shades).reduce(
      (acc, [shadeKey, shadeValue]) => {
        if (shadeValue !== '#ffffff') {
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
