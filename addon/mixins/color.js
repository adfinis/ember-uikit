import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export const ALL_COLORS = {
  DEFAULT: 'default',
  MUTED: 'muted',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  SUCCESS: 'success',
  LINK: 'link',
  TEXT: 'text'
};

export default Mixin.create({
  init() {
    this._super(...arguments);

    this.setProperties({
      includedColors: [],
      excludedColors: []
    });
  },

  classNameBindings: ['_colorClass'],

  colorTemplate: 'uk-$color$-background',

  _color: null,

  _colors: computed('includedColors.[]', 'excludedColors.[]', function() {
    let included = this.get('includedColors') || [];
    let excluded = this.get('excludedColors') || [];

    return Object.values(ALL_COLORS).filter(c => {
      return (
        !excluded.includes(c) && (!included.length || included.includes(c))
      );
    });
  }),

  _colorClass: computed('_color', function() {
    let color = this.get('_color');

    if (!color) {
      return null;
    }

    return this.get('colorTemplate').replace(/\$color\$/, color);
  }),

  color: computed('_color', {
    get() {
      return this.get('_color');
    },
    set(_, value) {
      if (value && !this.get('_colors').includes(value)) {
        assert(`Color must be one of ${this.get('_colors').join(', ')}.`);

        return;
      }

      this.set('_color', value);

      return value;
    }
  })
});
