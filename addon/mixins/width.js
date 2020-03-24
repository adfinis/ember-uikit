import Mixin from "@ember/object/mixin";
import { computed } from "@ember/object";
import { validatedArrayComputedProperty } from "ember-uikit/-private/validated-computed-property";
import MEDIA_OPTIONS from "ember-uikit/-private/media";

export const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

export const MAX_GRID = 6;

export const GRID_NUMBERS = [...new Array(MAX_GRID).keys()].map((n) => n + 1);

export const GRID_OPTIONS = Array.from(
  new Set(
    GRID_NUMBERS.reduce((all, of) => {
      return [
        ...all,
        ...GRID_NUMBERS.filter((n) => of >= n).map((n) => {
          return `${n / gcd(n, of)}-${of / gcd(n, of)}`;
        }),
      ];
    }, [])
  )
).reduce(
  (obj, val) => Object.assign(obj, { [val.replace(/-/, "_OF_")]: val }),
  {}
);

export const FIXED_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
  XXLARGE: "xxlarge",
};

export const SPECIAL_OPTIONS = {
  AUTO: "auto",
  EXPAND: "expand",
};

export const WIDTH_OPTIONS = Object.assign(
  {},
  GRID_OPTIONS,
  FIXED_OPTIONS,
  SPECIAL_OPTIONS
);

export default Mixin.create({
  WIDTH_OPTIONS: Object.values(WIDTH_OPTIONS),
  MEDIA_OPTIONS: Object.values(MEDIA_OPTIONS),

  classNameBindings: ["widthClass"],

  _widthTemplate: "uk-width-$width$",

  width: validatedArrayComputedProperty(
    "_width",
    "width",
    "WIDTH_OPTIONS",
    "MEDIA_OPTIONS",
    " "
  ),

  widthClass: computed("width", function () {
    return (
      this.get("width") &&
      this.get("width")
        .split(" ")
        .map((w) => this.get("_widthTemplate").replace(/\$width\$/, w))
        .join(" ")
    );
  }),
});
