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
      beforeshow: this.getWithDefault("on-beforeshow", noop),
      show: this.getWithDefault("on-show", noop),
      shown: this.getWithDefault("on-shown", noop),
      beforehide: this.getWithDefault("on-beforehide", noop),
      hide: this.getWithDefault("on-hide", noop),
      hidden: this.getWithDefault("on-hidden", noop)
    };

    for (let event in events) {
      UIkit.util.on(this.element, event, events[event]);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    this.setEvents();
  }
});
