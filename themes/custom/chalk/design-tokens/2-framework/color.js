const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$foun-color-neutral-gray`,
    // trueHeading: ``, Uncomment and use to override suggestions
    // trueText: `$foun-color-core-true-red`,
    container: {
      background: `$foun-color-brand-medallion-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  secondary: {
    background: `$foun-color-brand-true-tulanegreen`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$foun-color-brand-neutral-limestone-60`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  tertiary: {
    background: `$foun-color-brand-accent-verdigris-20`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$foun-color-brand-olivebranch-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  status: {
    success: `$foun-color-brand-mardigras-80`,
    disabled: `$foun-color-brand-neutral-spanishmoss-40`,
    error: `$foun-color-brand-accent-crawfest`,
    warning: `$foun-color-brand-medallion-80`,
    info: `$foun-color-brand-avenueblue-20`,
  },
}

processTokens.generateColorSuggestions(color)

module.exports = { frameworkColor: processTokens.generateTokens(color) }
