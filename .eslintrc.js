const TYPESCRIPT_RULES = {
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
  'no-unused-vars': 0,
}

const NEXTJS_RULES = {
  // NextJs doesn't require React to be in scope
  'react/react-in-jsx-scope': 0,
  // <a> is required in <Link/> without herf
  'jsx-a11y/anchor-is-valid': 0,
}

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    // idk
    'import/no-cycle': 0,

    //needed in certain instances
    'react/jsx-props-no-spreading': 0,

    // Nah
    'import/prefer-default-export': 0,

    // This is fucking with prettier
    'react/jsx-one-expression-per-line': 0,

    // no extensions
    'import/extensions': [0, 'never'],

    ...TYPESCRIPT_RULES,
    ...NEXTJS_RULES,
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

  env: {
    browser: true,
    node: true,
  },
}
