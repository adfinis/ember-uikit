import Component from "@glimmer/component";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";
import width from "ember-uikit/-private/width";

export const LABEL_COLOR_OPTIONS = [
  COLOR_OPTIONS.NONE,
  COLOR_OPTIONS.SUCCESS,
  COLOR_OPTIONS.WARNING,
  COLOR_OPTIONS.DANGER,
];

export default class UkButtonComponent extends Component {
  @color({
    template: "uk-label-$value$",
    options: LABEL_COLOR_OPTIONS,
    defaultValue: COLOR_OPTIONS.NONE,
  })
  color;

  @width width;
}
