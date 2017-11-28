import Component from '@ember/component';
import { SIZE_OPTIONS } from 'ember-uikit/mixins/size';

export default Component.extend({
  tagName: 'tr',
  sizes: Object.values(SIZE_OPTIONS)
});
