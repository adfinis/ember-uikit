import Component from "@ember/component";
import layout from "../templates/components/uk-card";
import ColorMixin, { COLOR_OPTIONS } from "ember-uikit/mixins/color";
import SizeMixin from "ember-uikit/mixins/size";
import WidthMixin from "ember-uikit/mixins/width";

export const CARD_COLOR_OPTIONS = [
  COLOR_OPTIONS.DEFAULT,
  COLOR_OPTIONS.PRIMARY,
  COLOR_OPTIONS.SECONDARY
];

export default Component.extend(ColorMixin, SizeMixin, WidthMixin, {
  COLOR_OPTIONS: CARD_COLOR_OPTIONS,

  _color: COLOR_OPTIONS.DEFAULT,

  layout,

  colorTemplate: "uk-card-$color$",

  sizeTemplate: "uk-card-$size$",

  classNames: ["uk-card"],

  classNameBindings: ["hover:uk-card-hover"],

  hover: false
});
