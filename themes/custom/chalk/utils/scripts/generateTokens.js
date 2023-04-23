function generateTokens(tokens) {
  const result = {}

  for (const [category, subTokens] of Object.entries(tokens)) {
    if (typeof subTokens === 'object') {
      for (const [key, value] of Object.entries(subTokens)) {
        const tokenName = `$${category}-${key}`
        result[tokenName] = { value }
      }
    } else {
      const tokenName = `$${category}`
      result[tokenName] = { value: subTokens }
    }
  }

  return result
}

module.exports = generateTokens
