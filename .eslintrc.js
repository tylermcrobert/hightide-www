module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    /*
      NextJS overwrides
    */
    // NextJs doesn't require React to be in scope
    'react/react-in-jsx-scope': 0,
    // <a> is required in <Link /> without herf
    'jsx-a11y/anchor-is-valid': 0,

    /*
      Typescript overwrides
    */
    // handle with typescript
    'react/prop-types': 0,
    // doesn't like .tsx extensions
    'react/jsx-filename-extension': 0,
    // No commas or semi in interfaces
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    // Disable warning abotut function return types.
    // Warns too often for React arrow functions.
    '@typescript-eslint/explicit-function-return-type': 0,
    // Disabling because of bug
    '@typescript-eslint/no-unused-vars': 0,
  },

  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },

    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
