import { on } from "@ember/modifier";
import Component from "@glimmer/component";
import { or } from "ember-truth-helpers";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";
import optionalArgument from "ember-uikit/-private/optional-argument";
import size from "ember-uikit/-private/size";
import width from "ember-uikit/-private/width";
import UkSpinner from "ember-uikit/components/uk-spinner";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

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

  @optionalArgument onClick;

  <template>
    <button
      type={{or @type "button"}}
      class={{trimmedJoin
        "uk-button"
        (if @active "uk-active")
        this.color
        this.size
        this.width
      }}
      disabled={{@disabled}}
      title={{@title}}
      {{on "click" this.onClick}}
      ...attributes
    >
      {{#if @loading}}
        <UkSpinner />
      {{else}}
        {{#if (has-block)}}{{~yield~}}{{else}}{{~@label~}}{{/if}}
      {{/if}}
    </button>
  </template>
}
