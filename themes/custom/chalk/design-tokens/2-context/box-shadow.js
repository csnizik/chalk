const processTokens = require('../../utils/processTokens')

const boxShadowColor = 'rgba(46, 46, 69, '

const boxShadow = {
  fiero: `$foun-unit-size-fiero-box-shadow-x $foun-unit-size-fiero-box-shadow-y ${boxShadowColor}$foun-unit-size-fiero-box-shadow-opacity)`,
  // elevated1: `$foun-spacing-xxxs $foun-spacing-xxxs $foun-spacing-xxs ${boxShadowColor}0.2)`,
  // elevated2: `$foun-spacing-xxs $foun-spacing-xxs $foun-spacing-xxs ${boxShadowColor}0.3)`,
  // elevated3: `$foun-spacing-xxs $foun-spacing-xxs $foun-spacing-xs ${boxShadowColor}0.4)`,
  // elevated4: `$foun-spacing-xs $foun-spacing-xs $foun-spacing-xs ${boxShadowColor}0.5)`,
  // elevated6: `$foun-spacing-xs $foun-spacing-sm $foun-spacing-sm ${boxShadowColor}0.6)`,
  // elevated8: `$foun-spacing-sm $foun-spacing-md $foun-spacing-md ${boxShadowColor}0.7)`,
  // elevated12: `$foun-spacing-md $foun-spacing-lg $foun-spacing-lg ${boxShadowColor}0.8)`,
  // elevated16: `$foun-spacing-lg $foun-spacing-xl $foun-spacing-xl ${boxShadowColor}0.9)`,
  // elevated24: `$foun-spacing-xl $foun-spacing-xxl $foun-spacing-xxl ${boxShadowColor}1)`,
}

module.exports = { contBoxShadow: processTokens.generateTokens(boxShadow) }
