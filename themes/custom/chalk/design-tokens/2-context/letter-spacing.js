const processTokens = require('../../utils/processTokens')

const letterSpacing = {
  xxxs: `$foun-spacing-xxxs`,
  xxs: `$foun-spacing-xxs`,
  xs: `$foun-spacing-xs`,
  sm: `$foun-spacing-sm`,
  md: `$foun-spacing-md`,
  lg: `$foun-spacing-lg`,
  xl: `$foun-spacing-xl`,
  xxl: `$foun-spacing-xxl`,
  xxxl: `$foun-spacing-xxxl`,
}

module.exports = {
  contLetterSpacing: processTokens.generateTokens(letterSpacing),
}
