const processTokens = require('../../utils/processTokens')

const breakpoint = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px',
}

module.exports = {
  foundationBreakpoint: processTokens.generateTokens(breakpoint),
}
