module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'whitepace'
  },
  create (context) {
    const sourceCode = context.getSourceCode()
  return {
    ObjectPattern(node) {
      const tokens = sourceCode.getTokens(node)
      const limit = tokens.length
      const first = tokens[0]
      const second = tokens[1]
      const secondLast = tokens[limit - 2]
      const last = tokens[limit - 1]
      
  	  if (!sourceCode.isSpaceBetweenTokens(first,second)) {
        	context.report({
            node,
            loc: second.loc,
            message: 'No space after the opening bracket!',
            fix(fixer) {
                return fixer.insertTextBefore(second, " ");
            }
          });
      }
      
      if (!sourceCode.isSpaceBetweenTokens(secondLast,last)) {
        	context.report({
            node,
            loc: last.loc,
            message: 'No space before the closing bracket!',
            fix(fixer) {
                return fixer.insertTextBefore(last, " ");
            }
          });
      }
    }
  };
  }
}
