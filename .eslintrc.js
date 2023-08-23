module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "tsconfig.json"
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-console': 'off',
  }
};
