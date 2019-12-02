module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'react', 'react-hooks'],
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'import/no-cycle': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-danger': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['/', 'src', __dirname],
        moduleDirectory: ['node_modules'],
      },
    },
  },
}
