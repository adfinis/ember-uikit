import Component from "@glimmer/component";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";
import size from "ember-uikit/-private/size";
import width from "ember-uikit/-private/width";

export const BUTTON_COLOR_OPTIONS = [
  COLOR_OPTIONS.DEFAULT,
  COLOR_OPTIONS.PRIMARY,
  COLOR_OPTIONS.SECONDARY,
  COLOR_OPTIONS.DANGER,
  COLOR_OPTIONS.LINK,
  COLOR_OPTIONS.TEXT,
];

export default class UkButtonComponent extends Component {
  @color({
    template: "uk-button-$value$",
    options: BUTTON_COLOR_OPTIONS,
  })
  color;

  @size({ template: "uk-button-$value$" }) size;
  @width width;
}
