module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      'error', 'always-multiline'
    ]
  },
};
