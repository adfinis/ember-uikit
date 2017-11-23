import Component from '@ember/component';
import layout from '../templates/components/uk-card';
import ColorMixin, { ALL_COLORS } from 'ember-uikit/mixins/color';
import SizeMixin from 'ember-uikit/mixins/size';
import WidthMixin from 'ember-uikit/mixins/width';

export default Component.extend(ColorMixin, SizeMixin, WidthMixin, {
  init() {
    this._super(...arguments);

    this.set('includedColors', [
      ALL_COLORS.DEFAULT,
      ALL_COLORS.PRIMARY,
      ALL_COLORS.SECONDARY
    ]);
  },

  _color: ALL_COLORS.DEFAULT,

  layout,

  colorTemplate: 'uk-card-$color$',

  sizeTemplate: 'uk-card-$size$',

  classNames: ['uk-card'],

  classNameBindings: ['hover:uk-card-hover'],

  hover: false
});
