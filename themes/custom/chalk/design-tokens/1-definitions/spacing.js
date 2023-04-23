const processTokens = require('../../utils/processTokens')

// Using em here instead of rem for more accurate proportional sizing

const spacing = {
  xs: '0.25em',
  sm: '0.5em',
  md: '0.75em',
  lg: '1em',
  xl: '1.5em',
  xxl: '3em',
  xxxl: '5em',
}

module.exports = { spacing: processTokens.generateTokens(spacing) }
