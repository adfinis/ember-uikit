import Component from "@ember/component";
import layout from "../../../templates/components/uk-switcher/content/item";
import UIkit from "uikit";

// empty function as default event handler
const noop = () => {};

export default Component.extend({
  layout,

  tagName: "li",

  setEvents() {
    let events = {
      beforeshow: this["on-beforeshow"] ?? noop,
      show: this["on-show"] ?? noop,
      shown: this["on-shown"] ?? noop,
      beforehide: this["on-beforehide"] ?? noop,
      hide: this["on-hide"] ?? noop,
      hidden: this["on-hidden"] ?? noop,
    };

    for (let event in events) {
      UIkit.util.on(this.element, event, events[event]);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    this.setEvents();
  },
});
