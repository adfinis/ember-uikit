import { hash } from "@ember/helper";
import Component from "@glimmer/component";

import flex from "ember-uikit/-private/flex";
import UkSubnavItem from "ember-uikit/components/uk-subnav/item";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

export default class UkSubnavComponent extends Component {
  @flex flex;

  <template>
    <ul
      class={{trimmedJoin
        "uk-subnav"
        (if @divider "uk-subnav-divider")
        (if @pill "uk-subnav-pill")
        this.flex
      }}
      ...attributes
    >
      {{yield (hash item=(component UkSubnavItem))}}
    </ul>
  </template>
}
