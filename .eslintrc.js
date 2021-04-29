module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'import/no-named-as-default': 0,
    'import/extensions': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
}
