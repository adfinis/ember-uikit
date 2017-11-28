import Component from '@ember/component';
import layout from '../templates/components/uk-tab';
import SwitcherMixin from 'ember-uikit/mixins/switcher';
import FlexMixin from 'ember-uikit/mixins/flex';

export default Component.extend(SwitcherMixin, FlexMixin, {
  layout,

  init() {
    this._super(...arguments);

    this.set(
      'attributeBindings',
      this.get('attributeBindings').filter(i => i !== 'ukSwitcher:uk-switcher')
    );
  },

  tagName: 'ul',

  attributeBindings: ['ukSwitcher:uk-tab'],

  classNames: ['uk-tab'],

  classNameBindings: [
    'left:uk-tab-left',
    'right:uk-tab-right',
    'bottom:uk-tab-bottom'
  ],

  left: false,
  right: false,
  bottom: false
});
