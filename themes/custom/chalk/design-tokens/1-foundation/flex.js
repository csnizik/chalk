const processTokens = require('../../utils/processTokens')

const flex = {
  display: {
    flex: 'flex',
    inlineFlex: 'inline-flex',
  },
  direction: {
    row: 'flex-row',
    rowReverse: 'flex-row-reverse',
    col: 'flex-col',
    colReverse: 'flex-col-reverse',
  },
  wrap: {
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',
    noWrap: 'no-wrap',
  },
  flex: {
    basisZeroAdjust: '1 1 0%', // The element can grow and shrink proportionally to the available space, with a starting size of 0%.
    basisNaturalShrink: '0 1 auto', // The element won't grow but can shrink if needed, starting at its natural size (determined by content or width/height). This is default for `display: flex` if no value is passed for css properties `flex`, `flex-grow`, `flex-shrink`.
    basisNaturalAdjust: '1 1 auto', // The element can grow and shrink proportionally to the available space, starting at its natural size.
    basisNatural: 'none', // The element won't grow or shrink and will maintain its natural size.
  },
  grow: {
    grow: '1', // Allows  element to grow proportionally if needed. (It doesn't affect flex-shrink or flex-basis.)
    noGrow: '0', // Prevents element from growing. (It doesn't affect flex-shrink or flex-basis.)
  },
  shrink: {
    shrink: '1', // Allows element to shrink proportionally if needed. (It doesn't affect flex-grow or flex-basis.)
    noShrink: '0', // Prevents element from shrinking. (It doesn't affect flex-grow or flex-basis.)
  },
  order: {
    first: '-9999', // Placed before all other elements with higher order values in the same flex or grid container.
    last: '9999', // Placed after all other elements with lower values in the same flex or grid container.
  },
}

module.exports = { foundationFlex: processTokens.generateTokens(flex) }
