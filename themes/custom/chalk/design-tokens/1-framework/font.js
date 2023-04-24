const processTokens = require('../../utils/processTokens')

const font = {
  family: {
    body: `'Barlow', serif`,
    heading: `'Battambang', sans-serif`,
    titling: `'Karantina', sans-serif`,
  },
  lineHeight: {
    xs: 1,
    sm: 1.3,
    md: 1.7,
    lg: 2,
    xl: 2.5,
    xxl: 3,
  },
  size: {
    xs: '0.7rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '2rem',
    xl: '3.5rem',
    xxl: '5rem',
    xxxl: '8rem',
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

module.exports = { frFont: processTokens.generateTokens(font) }
