import { hash } from "@ember/helper";
import Component from "@glimmer/component";

import width from "ember-uikit/-private/width";
import UkListItem from "ember-uikit/components/uk-list/item";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

export default class UkListComponent extends Component {
  @width width;

  <template>
    <ul
      class={{trimmedJoin
        "uk-list"
        (if @divider "uk-list-divider")
        (if @striped "uk-list-striped")
        (if @bullet "uk-list-bullet")
        (if @large "uk-list-large")
        this.width
      }}
      ...attributes
    >
      {{yield (hash item=(component UkListItem))}}
    </ul>
  </template>
}
