import Component from '@ember/component';
import { COLOR_OPTIONS } from 'ember-uikit/mixins/color';

export default Component.extend({
  tagName: 'tr',
  colors: Object.values(COLOR_OPTIONS)
});
