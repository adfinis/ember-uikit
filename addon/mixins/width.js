import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export const MAX_GRID = 6;

export const GRID = [...new Array(MAX_GRID).keys()].map(n => n + 1);

export const SPECIAL = {
  AUTO: 'auto',
  EXPAND: 'expand'
};

export const FIXED = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

export const MEDIA = {
  SMALL: '@s',
  MEDIUM: '@m',
  LARGE: '@l',
  XLARGE: '@xl'
};

export default Mixin.create({
  classNameBindings: ['_widthClasses'],

  _widthTemplate: 'uk-width-$width$',

  _widths: null,

  _widthClasses: computed('_widths', function() {
    let widths = this.get('_widths');

    if (!widths) {
      return null;
    }

    let tpl = this.get('_widthTemplate');

    return widths.map(w => tpl.replace(/\$width\$/, w)).join(' ');
  }),

  width: computed('_widths', {
    get() {
      return this.get('_widths').join(' ');
    },
    set(_, value) {
      if (!value) {
        this.set('_widths', null);
        return value;
      }

      let widths = value.split(' ');

      let mediaRePartial = `(${Object.values(MEDIA).join('|')})?`;

      let gridRe = new RegExp(
        `^(${GRID.join('|')})-(${GRID.join('|')})${mediaRePartial}$`
      );

      let specialRe = new RegExp(
        `^(${Object.values(SPECIAL).join('|')})${mediaRePartial}$`
      );

      let fixedRe = new RegExp(
        `^(${Object.values(FIXED).join('|')})${mediaRePartial}$`
      );

      let valid = widths.filter(width => {
        return (
          gridRe.test(width) || specialRe.test(width) || fixedRe.test(width)
        );
      });

      this.set('_widths', valid);

      return valid.join(' ');
    }
  })
});
