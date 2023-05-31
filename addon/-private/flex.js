import { camelize } from "@ember/string";

import createDecorator from "ember-uikit/-private/decorator";
import { validatedDecorator } from "ember-uikit/-private/validated";

export const FLEX_HORIZONTAL_OPTIONS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
  BETWEEN: "between",
  AROUND: "around",
};

export const FLEX_VERTICAL_OPTIONS = {
  STRETCH: "stretch",
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
};

export const FLEX_DIRECTION_OPTIONS = {
  ROW: "row",
  ROW_REVERSE: "row-reverse",
  COLUMN: "column",
  COLUMN_REVERSE: "column-reverse",
};

export const FLEX_WRAP_OPTIONS = {
  WRAP: "wrap",
  WRAP_REVERSE: "wrap-reverse",
  NOWRAP: "nowrap",
};

export const FLEX_WRAP_ALIGNMENT_OPTIONS = {
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around",
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
};

export default createDecorator(function (
  target,
  property,
  descriptor,
  { prefix = "flex" } = {},
) {
  const propConfig = [
    {
      name: camelize(`${prefix}-horizontal`),
      options: Object.values(FLEX_HORIZONTAL_OPTIONS),
    },
    {
      name: camelize(`${prefix}-vertical`),
      options: Object.values(FLEX_VERTICAL_OPTIONS),
    },
    {
      name: camelize(`${prefix}-direction`),
      options: Object.values(FLEX_DIRECTION_OPTIONS),
    },
    {
      name: camelize(`${prefix}-wrap`),
      options: Object.values(FLEX_WRAP_OPTIONS),
    },
    {
      name: camelize(`${prefix}-wrap-alignment`),
      options: Object.values(FLEX_WRAP_ALIGNMENT_OPTIONS),
      template: "uk-flex-wrap-$value$",
    },
  ];

  propConfig.forEach(({ name, options, template }) => {
    Object.defineProperty(
      target,
      name,
      validatedDecorator(
        target,
        name,
        {},
        {
          template: template ?? `uk-flex-$value$`,
          options,
        },
      ),
    );
  });

  return {
    get() {
      const flex = this.args[property] ?? descriptor.initializer?.();
      const inline = this.args[camelize(`${prefix}-inline`)];

      return [
        ...(flex ? ["uk-flex"] : []),
        ...(inline ? ["uk-flex-inline"] : []),
        ...propConfig.map(({ name }) => this[name]),
      ]
        .filter(Boolean)
        .join(" ")
        .trim();
    },
  };
});
