import Component from "@ember/component";
import layout from "../templates/components/uk-toggle-switcher";
import validatedComputedProperty from "ember-uikit/-private/validated-computed-property";
import { computed } from "@ember/object";

export const SIZE_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

export const COLOR_OPTIONS = {
  DEFAULT: "default",
  ONOFF: "onoff"
};

export default Component.extend({
  layout,

  SIZE_OPTIONS: Object.values(SIZE_OPTIONS),
  COLOR_OPTIONS: Object.values(COLOR_OPTIONS),

  classNames: ["uk-toggle-switch"],
  classNameBindings: ["colorClass"],

  value: false,
  name: null,
  showLabels: false,
  onLabel: null,
  offLabel: null,

  _size: SIZE_OPTIONS.MEDIUM,
  _color: COLOR_OPTIONS.DEFAULT,

  size: validatedComputedProperty("_size", "size", "SIZE_OPTIONS"),
  color: validatedComputedProperty("_color", "color", "COLOR_OPTIONS"),

  colorClass: computed("color", function() {
    return `uk-toggle-switch-${this.get("color")}`;
  }),

  actions: {
    toggle(value) {
      let action = this["on-toggle"];

      if (typeof action === "function") {
        // one way binding
        action(value);

        return;
      }

      // two way binding
      this.set("value", value);
    }
  }
});
