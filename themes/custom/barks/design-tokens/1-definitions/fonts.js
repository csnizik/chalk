const processTokens = require('../../utils/processTokens')

const fonts = {
  family: {
    body: ['Barlow', 'serif'],
    heading: ['Battambang', 'sans-serif'],
    titling: ['Karantina', 'serif'],
  },
  size: {
    xs: '0.7rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.75rem',
    xxxl: '3.5rem',
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

module.exports = { font: processTokens.generateTokens(fonts) }
