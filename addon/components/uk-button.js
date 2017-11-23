import Component from '@ember/component';
import layout from '../templates/components/uk-button';
import ColorMixin, { ALL_COLORS } from 'ember-uikit/mixins/color';
import WidthMixin from 'ember-uikit/mixins/width';
import SizeMixin from 'ember-uikit/mixins/size';

export default Component.extend(ColorMixin, WidthMixin, SizeMixin, {
  init() {
    this._super(...arguments);

    this.set('includedColors', [
      ALL_COLORS.DEFAULT,
      ALL_COLORS.PRIMARY,
      ALL_COLORS.SECONDARY,
      ALL_COLORS.LINK,
      ALL_COLORS.TEXT
    ]);
  },

  _color: ALL_COLORS.DEFAULT,

  layout,

  tagName: 'button',

  colorTemplate: 'uk-button-$color$',

  sizeTemplate: 'uk-button-$size$',

  classNames: ['uk-button'],

  classNameBindings: ['active:uk-active'],

  attributeBindings: ['disabled', 'type'],

  label: '',

  type: 'button',

  disabled: false,

  active: false,

  loading: false,

  click(e) {
    this.getWithDefault('on-click', () => {})(e);
  }
});
