module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['prettier', 'ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:ember-suave/recommended',
    'prettier'
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': 'error',
    'ember/named-functions-in-promises': 'off'
  }
};
