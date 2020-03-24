import ToggleComponent from "ember-toggle/components/x-toggle/component";
import validatedComputedProperty from "ember-uikit/-private/validated-computed-property";
import { computed } from "@ember/object";

export const SIZE_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const COLOR_OPTIONS = {
  DEFAULT: "default",
  ONOFF: "onoff",
};

export default ToggleComponent.extend({
  init() {
    this._super(...arguments);

    this.setProperties({
      _size: SIZE_OPTIONS.MEDIUM,
      _color: COLOR_OPTIONS.DEFAULT,
    });
  },

  SIZE_OPTIONS: Object.values(SIZE_OPTIONS),
  COLOR_OPTIONS: Object.values(COLOR_OPTIONS),

  classNames: ["uk-toggle-switch"],
  classNameBindings: ["colorClass"],

  value: false,
  name: null,
  showLabels: false,
  onLabel: null,
  offLabel: null,
  theme: "light",

  size: validatedComputedProperty("_size", "size", "SIZE_OPTIONS"),
  color: validatedComputedProperty("_color", "color", "COLOR_OPTIONS"),

  colorClass: computed("color", function () {
    return `uk-toggle-switch-${this.get("color")}`;
  }),

  onToggle: computed(function () {
    return (value) => {
      let action = this["on-toggle"];

      if (typeof action === "function") {
        // one way binding
        action(value);

        return;
      }

      // two way binding
      // eslint-disable-next-line ember/no-side-effects
      this.set("value", value);
    };
  }),
});
