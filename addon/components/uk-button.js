import Component from "@ember/component";
import ColorMixin, { COLOR_OPTIONS } from "ember-uikit/mixins/color";
import EventedMixin from "ember-uikit/mixins/evented";
import SizeMixin from "ember-uikit/mixins/size";
import WidthMixin from "ember-uikit/mixins/width";

import layout from "../templates/components/uk-button";

export const BUTTON_COLOR_OPTIONS = [
  COLOR_OPTIONS.DEFAULT,
  COLOR_OPTIONS.PRIMARY,
  COLOR_OPTIONS.SECONDARY,
  COLOR_OPTIONS.LINK,
  COLOR_OPTIONS.TEXT,
];

export default Component.extend(
  ColorMixin,
  WidthMixin,
  SizeMixin,
  EventedMixin,
  {
    COLOR_OPTIONS: BUTTON_COLOR_OPTIONS,

    _color: COLOR_OPTIONS.DEFAULT,

    layout,

    tagName: "button",

    colorTemplate: "uk-button-$color$",

    sizeTemplate: "uk-button-$size$",

    classNames: ["uk-button"],

    classNameBindings: ["active:uk-active"],

    attributeBindings: ["disabled", "type", "title"],

    label: "",

    type: "button",

    disabled: false,

    active: false,

    loading: false,

    title: "",
  }
);
