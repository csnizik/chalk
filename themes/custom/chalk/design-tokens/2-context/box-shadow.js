const processTokens = require('../../utils/processTokens')

const boxShadows = {
  elevated1: `0 $foun-spacing-xxxs $foun-spacing-xxxs $foun-color-neutral-gray-20`,
  elevated2: `$foun-spacing-xxxs $foun-spacing-xxs $foun-spacing-xxs $foun-color-neutral-gray-20`,
  // elevatedCurled,
}

module.exports = { contBoxShadows: processTokens.generateTokens(boxShadows) }
