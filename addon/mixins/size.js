import Mixin from "@ember/object/mixin";
import { computed } from "@ember/object";
import validatedComputedProperty from "ember-uikit/-private/validated-computed-property";

export const SIZE_OPTIONS = {
  DEFAULT: "",
  SMALL: "small",
  LARGE: "large",
};

export default Mixin.create({
  SIZE_OPTIONS: Object.values(SIZE_OPTIONS),

  classNameBindings: ["sizeClass"],

  sizeTemplate: "uk-size-$size$",

  size: validatedComputedProperty("_size", "size", "SIZE_OPTIONS"),

  sizeClass: computed("_size", function () {
    return (
      this.get("size") &&
      this.get("sizeTemplate").replace(/\$size\$/, this.get("size"))
    );
  }),
});
