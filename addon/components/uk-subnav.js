import Component from '@ember/component';
import layout from '../templates/components/uk-subnav';

export default Component.extend({
  layout,

  tagName: 'ul',

  classNames: ['uk-subnav'],

  classNameBindings: ['divider:uk-subnav-divider', 'pill:uk-subnav-pill'],

  divider: false,

  pill: false
});
