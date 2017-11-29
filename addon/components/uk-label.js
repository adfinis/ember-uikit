import Component from '@ember/component';
import layout from '../templates/components/uk-label';
import ColorMixin, { COLOR_OPTIONS } from 'ember-uikit/mixins/color';

export const LABEL_COLOR_OPTIONS = [
  '',
  COLOR_OPTIONS.SUCCESS,
  COLOR_OPTIONS.WARNING,
  COLOR_OPTIONS.DANGER
];

export default Component.extend(ColorMixin, {
  COLOR_OPTIONS: LABEL_COLOR_OPTIONS,

  layout,

  tagName: 'span',

  classNames: ['uk-label'],

  colorTemplate: 'uk-label-$color$'
});
