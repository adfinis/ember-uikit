import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Mixin.create({
  attributeBindings: [
    'ukSwitcher:uk-switcher',
    'connect',
    'animation',
    'animationDuration:duration',
    'swiping'
  ],

  contentId: '',
  animation: '',
  animationDuration: 200,
  swiping: false,
  ukSwitcher: '',

  connect: computed('contentId', function() {
    let id = this.get('contentId');

    return isEmpty(id) ? '' : `#${id}`;
  })
});
