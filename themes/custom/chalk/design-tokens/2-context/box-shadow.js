const processTokens = require('../../utils/processTokens')

const boxShadows = {
  elevated1: `0 $fr-spacing-xxxs $fr-spacing-xxxs $fr-color-neutral-gray-20`,
  elevated2: `$fr-spacing-xxxs $fr-spacing-xxs $fr-spacing-xxs $fr-color-neutral-gray-20`,
  // elevatedCurled,
}

module.exports = { coBoxShadows: processTokens.generateTokens(boxShadows) }
