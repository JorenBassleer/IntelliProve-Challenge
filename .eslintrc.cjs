module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'linebreak-style': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'array-bracket-newline': ['error', { multiline: true }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['@components', './src/components'],
          ['@composables', './src/composables']
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
