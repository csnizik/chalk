const processTokens = require('../../utils/processTokens')

// Using em here instead of rem for more accurate proportional sizing

const border = {
  borderStyle: {
    solid: 'solid',
    groove: 'groove',
  },
  borderRadius: {
    xs: `$foun-spacing-xs`,
    sm: `$foun-spacing-sm`,
    md: `$foun-spacing-md`,
    lg: `$foun-spacing-lg`,
    xl: `$foun-spacing-xl`,
    xxl: `$foun-spacing-xxl`,
    xxxl: `$foun-spacing-xxxl`,
  },
  borderWidth: {
    xxs: `$foun-spacing-xxs`,
    xs: `$foun-spacing-xs`,
    sm: `$foun-spacing-sm`,
    md: `$foun-spacing-md`,
    lg: `$foun-spacing-lg`,
    xl: `$foun-spacing-xl`,
  },
}

module.exports = { contBorder: processTokens.generateTokens(border) }
