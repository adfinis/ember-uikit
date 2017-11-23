import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export const ALL_SIZES = {
  SMALL: 'small',
  LARGE: 'large'
};

export default Mixin.create({
  classNameBindings: ['_sizeClass'],

  sizeTemplate: 'uk-size-$size$',

  _size: null,

  _sizeClass: computed('_size', function() {
    let size = this.get('size');

    if (!size) {
      return null;
    }

    return this.get('sizeTemplate').replace(/\$size\$/, size);
  }),

  size: computed('_size', {
    get() {
      return this.get('_size');
    },
    set(_, value) {
      if (value && !Object.values(ALL_SIZES).includes(value)) {
        assert(`Size must be one of ${Object.values(ALL_SIZES).join(', ')}.`);

        return;
      }

      this.set('_size', value);

      return value;
    }
  })
});
