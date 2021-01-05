import Component from "@ember/component";
import UIkit from "uikit";

import layout from "../../../templates/components/uk-switcher/content/item";

// empty function as default event handler
const noop = () => {};

export default Component.extend({
  layout,

  tagName: "li",

  setEvents() {
    const events = {
      beforeshow: this["on-beforeshow"] ?? noop,
      show: this["on-show"] ?? noop,
      shown: this["on-shown"] ?? noop,
      beforehide: this["on-beforehide"] ?? noop,
      hide: this["on-hide"] ?? noop,
      hidden: this["on-hidden"] ?? noop,
    };

    for (const event in events) {
      UIkit.util.on(this.element, event, events[event]);
    }
  },
  didInsertElement(...args) {
    this._super(...args);
    this.setEvents();
  },
});
