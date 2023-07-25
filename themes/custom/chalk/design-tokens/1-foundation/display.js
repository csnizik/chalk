const processTokens = require('../../utils/processTokens')

const display = {
  block: 'block',
  flex: 'flex',
  inlineBlock: 'inline-block',
  none: 'none',
  table: 'table',
  tableRow: 'table-row',
  tableCell: 'table-cell',
  tableHeader: 'table-header-group',
  tableFooter: 'table-footer-group',
}
module.exports = { foundationDisplay: processTokens.generateTokens(display) }
