import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uk-switcher';

export default Component.extend({
  layout,

  animation: '',

  contentId: computed('elementId', function() {
    return `uk-switcher-content-${this.get('elementId')}`;
  })
});
