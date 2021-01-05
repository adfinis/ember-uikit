"use strict";

module.exports = {
  extends: "@adfinis-sygroup/eslint-config/ember-addon",
  rules: {
    // https://github.com/adfinis-sygroup/ember-uikit/issues/238
    "ember/no-new-mixins": "warn",
    "ember/no-mixins": "warn",
    // TODO: migrate to native classes
    "ember/no-classic-classes": "warn",
    "ember/no-actions-hash": "warn",
    "ember/no-classic-components": "warn",
    "ember/require-tagless-components": "warn",
    "ember/no-component-lifecycle-hooks": "warn",
  },
};
