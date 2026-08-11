import { hash } from "@ember/helper";
import Component from "@glimmer/component";
import { or } from "ember-truth-helpers";

import flex from "ember-uikit/-private/flex";
import UkTabItem from "ember-uikit/components/uk-tab/item";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";

export default class UkTabComponent extends Component {
  @flex flex;

  <template>
    {{#if @contentId}}
      <ul
        class={{trimmedJoin
          "uk-tab"
          (if @left "uk-tab-left")
          (if @right "uk-tab-right")
          (if @bottom "uk-tab-bottom")
        }}
        uk-tab
        active={{or @active 0}}
        connect="#{{@contentId}}"
        animation={{@animation}}
        duration={{@animationDuration}}
        swiping={{@swiping}}
        ...attributes
      >
        {{yield (hash item=(component UkTabItem))}}
      </ul>
    {{else}}
      <ul
        class={{trimmedJoin
          "uk-tab"
          (if @left "uk-tab-left")
          (if @right "uk-tab-right")
          (if @bottom "uk-tab-bottom")
        }}
        ...attributes
      >
        {{yield (hash item=(component UkTabItem))}}
      </ul>
    {{/if}}
  </template>
}
