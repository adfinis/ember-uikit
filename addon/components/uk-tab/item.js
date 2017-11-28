import Component from '@ember/component';
import layout from '../../templates/components/uk-tab/item';
import EventedMixin from 'ember-uikit/mixins/evented';

export default Component.extend(EventedMixin, {
  layout,

  tagName: 'li',

  classNameBindings: ['active:uk-active', 'disabled:uk-disabled'],

  active: false,

  disabled: false
});
