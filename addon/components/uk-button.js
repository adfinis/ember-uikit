import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uk-button';

export default Component.extend({
  layout,

  tagName: 'button',

  classNames: ['uk-button'],
  classNameBindings: [
    'active:uk-active',
    'styleClass',
    'sizeClass',
    'fill:uk-width-1-1'
  ],

  attributeBindings: ['disabled', 'type'],

  label: '',
  type: 'button',

  disabled: false,
  active: false,
  loading: false,

  style: '',
  size: '',

  styleClass: computed('style', function() {
    return this.get('style') && `uk-button-${this.get('style')}`;
  }),

  sizeClass: computed('size', function() {
    return this.get('size') && `uk-button-${this.get('size')}`;
  }),

  click(e) {
    this.getWithDefault('on-click', () => {})(e);
  }
});
