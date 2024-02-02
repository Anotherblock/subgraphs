const base = require('lint/eslint-preset');

module.exports = {
  ...base,
  ignorePatterns: ['*.yaml'],
  rules: {
    ...base.rules,
    '@typescript-eslint/ban-types': 'off',
  },
};
