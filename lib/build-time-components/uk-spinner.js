/* eslint-env node */
'use strict';

const {
  default: BuildTimeComponent
} = require('ember-ast-helpers/build-time-component');

module.exports = class UkSpinner extends BuildTimeComponent {
  constructor() {
    super(...arguments);

    this.tagName = 'div';
    this.attributeBindings = ['spinner:uk-spinner'];
    this.spinner = '';
  }
};
