const processTokens = require('../../utils/processTokens')

const font = {
  family: {
    body: `'Barlow', serif`,
    heading: `'Battambang', sans-serif`,
    titling: `'Karantina', sans-serif`,
  },
  style: {
    italic: 'italic',
    normal: 'normal',
    oblique: 'oblique',
  },
  weight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
}

module.exports = { foundationFont: processTokens.generateTokens(font) }
