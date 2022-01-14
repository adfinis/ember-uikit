import { warn } from "@ember/debug";

import createDecorator from "ember-uikit/-private/decorator";
import { trimmedJoin } from "ember-uikit/helpers/trimmed-join";

export const MEDIA_OPTIONS = {
  SMALL: "@s",
  MEDIUM: "@m",
  LARGE: "@l",
  XLARGE: "@xl",
};

export function validateValue(value, name, options) {
  if (
    value &&
    !options.some((v) => {
      const re = new RegExp(
        `^${v}(${Object.values(MEDIA_OPTIONS).join("|")})?$`
      );

      return re.test(value);
    })
  ) {
    const opts = options.map((o) => `'${o}'`).join(", ");
    warn(
      `\`${name}\` must be one of ${opts}. Passed was '${value}', which will therefore be ignored.`,
      {
        id: "ember-uikit.invalid-property",
      }
    );

    return null;
  }

  return value;
}

export function validatedDecorator(
  target,
  property,
  descriptor,
  { argument, options, defaultValue, template, sanitize = (val) => val || "" }
) {
  return {
    get() {
      const value = sanitize(
        validateValue(
          this.args[argument ?? property] ?? defaultValue,
          property,
          options
        )
      );

      return value && template.replace("$value$", value).trim();
    },
  };
}

export function validatedArrayDecorator(
  target,
  property,
  descriptor,
  {
    argument,
    options,
    defaultValue,
    template,
    separator = " ",
    sanitize = (val) => val || "",
  }
) {
  return {
    get() {
      return trimmedJoin(
        (this.args[argument ?? property] ?? defaultValue)
          ?.split(separator)
          .map((v) => {
            const value = sanitize(validateValue(v, property, options));

            return value && template.replace(`$value$`, value);
          }),
        { separator }
      );
    },
  };
}

export const validated = createDecorator(validatedDecorator);
export const validatedArray = createDecorator(validatedArrayDecorator);
