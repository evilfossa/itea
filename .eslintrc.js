module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-param-reassign": 0,
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "no-multiple-empty-lines": 0,
    "no-trailing-spaces": 0,
    "no-console": 0,
    "no-alert": 0
  },
};
