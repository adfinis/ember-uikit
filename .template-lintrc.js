"use strict";

module.exports = {
  extends: ["recommended", "ember-template-lint-plugin-prettier:recommended"],
  plugins: ["ember-template-lint-plugin-prettier"],
  rules: {
    "require-input-label": false,
    "no-obsolete-elements": false,
    "no-builtin-form-components": false,
  },
};
