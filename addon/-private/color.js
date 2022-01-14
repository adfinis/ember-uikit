import createDecorator from "ember-uikit/-private/decorator";
import { validatedDecorator } from "ember-uikit/-private/validated";

export const COLOR_OPTIONS = {
  NONE: "",
  DEFAULT: "default",
  MUTED: "muted",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
  LINK: "link",
  TEXT: "text",
};

export default createDecorator(function (
  target,
  property,
  descriptor,
  {
    template = "uk-$value$-background",
    options = Object.values(COLOR_OPTIONS),
    defaultValue = COLOR_OPTIONS.DEFAULT,
    ...args
  } = {}
) {
  return validatedDecorator(target, property, descriptor, {
    template,
    options,
    defaultValue,
    ...args,
  });
});
