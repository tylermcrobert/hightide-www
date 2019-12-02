module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    '@tylermcrobert/eslint-config/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
