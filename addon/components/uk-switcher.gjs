import { hash } from "@ember/helper";
import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";

import UkSwitcherContent from "ember-uikit/components/uk-switcher/content";
import UkSwitcherNav from "ember-uikit/components/uk-switcher/nav";

export default class UkSwitcherComponent extends Component {
  get contentId() {
    return `uk-switcher-content-${guidFor(this)}`;
  }

  <template>
    {{yield
      (hash
        nav=(component
          UkSwitcherNav
          contentId=this.contentId
          active=@active
          animation=@animation
          animationDuration=@animationDuration
          swiping=@swiping
        )
        content=(component UkSwitcherContent contentId=this.contentId)
      )
    }}
  </template>
}
