import createDecorator from "ember-uikit/-private/decorator";
import { validatedDecorator } from "ember-uikit/-private/validated";

export const SIZE_OPTIONS = {
  DEFAULT: "",
  SMALL: "small",
  LARGE: "large",
};

export default createDecorator(function (
  target,
  property,
  descriptor,
  { options = Object.values(SIZE_OPTIONS), ...args } = {}
) {
  return validatedDecorator(target, property, descriptor, {
    options,
    ...args,
  });
});
