/* eslint-env node */
'use strict';

const {
  default: BuildTimeComponent,
  interpolateProperties
} = require('ember-ast-helpers/build-time-component');

module.exports = class UkIcon extends BuildTimeComponent {
  constructor() {
    super(...arguments);

    this.tagName = 'span';
    this.attributeBindings = ['ukIcon:uk-icon'];
    this.positionalParams = ['icon'];
    this.icon = '';
    this.ratio = 1;

    this.ukIconContent = interpolateProperties('icon: $icon$; ratio: $ratio$', {
      divisor: '$'
    });
  }
};
