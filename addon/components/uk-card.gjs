import { hash } from "@ember/helper";
import Component from "@glimmer/component";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";
import size from "ember-uikit/-private/size";
import width from "ember-uikit/-private/width";
import UkCardBody from "ember-uikit/components/uk-card/body";
import UkCardFooter from "ember-uikit/components/uk-card/footer";
import UkCardHeader from "ember-uikit/components/uk-card/header";
import UkCardTitle from "ember-uikit/components/uk-card/title";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

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

  <template>
    <div
      class={{trimmedJoin
        "uk-card"
        (if @hover "uk-card-hover")
        this.color
        this.size
        this.width
      }}
      ...attributes
    >
      {{yield
        (hash
          header=(component UkCardHeader)
          title=(component UkCardTitle)
          body=(component UkCardBody)
          footer=(component UkCardFooter)
        )
      }}
    </div>
  </template>
}
