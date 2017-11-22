import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uk-icon';

const UkIconComponent = Component.extend({
  layout,

  tagName: 'span',

  attributeBindings: ['ukIcon:uk-icon'],
  icon: '',
  ratio: 1,

  ukIcon: computed('icon', 'ratio', function() {
    let parts = [];
    let { icon, ratio } = this.getProperties('icon', 'ratio');

    if (icon) {
      parts.push(`icon: ${icon}`);
    }

    if (ratio) {
      parts.push(`ratio: ${ratio}`);
    }

    return parts.join(';');
  })
});

UkIconComponent.reopenClass({
  positionalParams: ['icon']
});

export default UkIconComponent;
