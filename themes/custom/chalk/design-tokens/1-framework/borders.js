const processTokens = require('../../utils/processTokens')

// Using em here instead of rem for more accurate proportional sizing

const borders = {
  style: {
    horizontal: 'solid none',
    vertical: 'none solid',
  },
  borderRadius: {
    xs: '4%',
    sm: '8%',
    md: '16%',
    lg: '28%',
    xl: '40%',
    xxl: '60%',
  },
  borderWidth: {
    xs: '0.1em',
    sm: '0.2em',
    md: '0.5em',
    lg: '0.8em',
    xl: '1.5em',
    xxl: '2.5em',
  },
}

module.exports = { border: processTokens.generateTokens(borders) }
