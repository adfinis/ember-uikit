import { action } from "@ember/object";
import Component from "@glimmer/component";
import XToggle from "ember-toggle/components/x-toggle";

import color from "ember-uikit/-private/color";
import size from "ember-uikit/-private/size";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

export const SIZE_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const COLOR_OPTIONS = {
  DEFAULT: "default",
  ONOFF: "onoff",
};

export default class UkToggleSwitchComponent extends Component {
  @size({ options: Object.values(SIZE_OPTIONS), template: "$value$" }) size;

  @color({
    template: "uk-toggle-switch-$value$",
    options: Object.values(COLOR_OPTIONS),
    defaultValue: COLOR_OPTIONS.DEFAULT,
  })
  color;

  @action
  onToggle(value) {
    this.args.onToggle?.(value);
  }

  <template>
    <XToggle
      @value={{@value}}
      @name={{@name}}
      @showLabels={{@showLabels}}
      @onLabel={{@onLabel}}
      @offLabel={{@offLabel}}
      @theme="light"
      @size={{this.size}}
      @disabled={{@disabled}}
      @onToggle={{this.onToggle}}
      class={{trimmedJoin "uk-toggle-switch" this.color}}
      ...attributes
    />
  </template>
}
