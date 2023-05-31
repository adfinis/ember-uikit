import createDecorator from "ember-uikit/-private/decorator";
import { validatedArrayDecorator } from "ember-uikit/-private/validated";

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
    }, []),
  ),
).reduce(
  (obj, val) => Object.assign(obj, { [val.replace(/-/, "_OF_")]: val }),
  {},
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

export const WIDTH_OPTIONS = {
  ...GRID_OPTIONS,
  ...FIXED_OPTIONS,
  ...SPECIAL_OPTIONS,
};

export default createDecorator(function (
  target,
  property,
  descriptor,
  {
    template = "uk-width-$value$",
    options = Object.values(WIDTH_OPTIONS),
    ...args
  } = {},
) {
  return validatedArrayDecorator(target, property, descriptor, {
    template,
    options,
    ...args,
  });
});
