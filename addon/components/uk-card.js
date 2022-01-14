import Component from "@glimmer/component";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";
import size from "ember-uikit/-private/size";
import width from "ember-uikit/-private/width";

export const CARD_COLOR_OPTIONS = [
  COLOR_OPTIONS.DEFAULT,
  COLOR_OPTIONS.PRIMARY,
  COLOR_OPTIONS.SECONDARY,
];

export default class UkCardComponent extends Component {
  @color({
    template: "uk-card-$value$",
    options: Object.values(CARD_COLOR_OPTIONS),
  })
  color;

  @size({ template: "uk-card-$value$" }) size;

  @width width;
}
