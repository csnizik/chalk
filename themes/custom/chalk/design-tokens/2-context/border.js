const processTokens = require('../../utils/processTokens')

// Using em here instead of rem for more accurate proportional sizing

const border = {
  borderStyle: {
    solid: 'solid',
    groove: 'groove',
  },
  borderRadius: {
    xs: `$fr-spacing-xs`,
    sm: `$fr-spacing-sm`,
    md: `$fr-spacing-md`,
    lg: `$fr-spacing-lg`,
    xl: `$fr-spacing-xl`,
    xxl: `$fr-spacing-xxl`,
    xxxl: `$fr-spacing-xxxl`,
  },
  borderWidth: {
    xxs: `$fr-spacing-xxs`,
    xs: `$fr-spacing-xs`,
    sm: `$fr-spacing-sm`,
    md: `$fr-spacing-md`,
    lg: `$fr-spacing-lg`,
    xl: `$fr-spacing-xl`,
  },
}

module.exports = { coBorder: processTokens.generateTokens(border) }
