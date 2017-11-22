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
    'prettier'
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
