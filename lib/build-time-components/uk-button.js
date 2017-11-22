/* eslint-env node */
'use strict';

const {
  default: BuildTimeComponent,
  interpolateProperties
} = require('ember-ast-helpers/build-time-component');

module.exports = class UkButton extends BuildTimeComponent {
  constructor() {
    super(...arguments);

    this.tagName = 'button';
    this.classNames = ['uk-button'];
    this.attributeBindings = ['disabled', 'on-click:onclick'];
    this.classNameBindings = [
      'active:uk-active',
      'styleClass',
      'sizeClass',
      'fill:uk-width-1-1'
    ];

    this.label = '';

    this.disabled = false;
    this.active = false;
    this.loading = false;

    this.style = '';
    this.size = '';
    this.fill = false;

    this.styleClassContent = interpolateProperties('uk-button-:style:');
    this.sizeClassContent = interpolateProperties('uk-button-:size:');

    this
      .layout`{{#if loading}}{{uk-spinner}}{{else}}{{#if hasBlock}}{{~yield~}}{{else}}{{~label~}}{{/if}}{{/if}}`;
  }
};
