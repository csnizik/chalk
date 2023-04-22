const Color = require('tinycolor2')

const generateColorShades = (colors) => {
  return Object.keys(colors).reduce((result, prefix) => {
    const nestedColors = colors[prefix]

    const nestedShades = Object.keys(nestedColors).reduce((r, color) => {
      // Any color named "black" or "white" will be returned as-is,without shades; greyscales will be handled in another module
      if (color === 'black' || color === 'white') {
        return {
          ...r,
          [`${prefix}-${color}`]: { value: nestedColors[color] },
        }
      }

      const shades = {
        20: Color(nestedColors[color]).lighten(30).toString(),
        40: Color(nestedColors[color]).lighten(25).toString(),
        60: Color(nestedColors[color]).lighten(20).toString(),
        80: Color(nestedColors[color]).lighten(10).toString(),
        100: nestedColors[color],
      }

      // Remove any shades that can't be lightened any further without becoming pure white.
      const filteredShades = Object.keys(shades).reduce((acc, shadeKey) => {
        const shadeValue = shades[shadeKey]
        if (shadeValue !== '#ffffff') {
          acc[`${prefix}-${color}-${shadeKey}`] = { value: shadeValue }
        }
        return acc
      }, {})

      return {
        ...r,
        ...filteredShades,
      }
    }, {})

    return {
      ...result,
      ...nestedShades,
    }
  }, {})
}

module.exports = generateColorShades
