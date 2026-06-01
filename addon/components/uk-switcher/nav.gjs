import { assert } from "@ember/debug";
import { hash } from "@ember/helper";
import { ensureSafeComponent } from "@embroider/util";
import Component from "@glimmer/component";

import UkSubnavComponent from "ember-uikit/components/uk-subnav";
import UkTabComponent from "ember-uikit/components/uk-tab";

export default class UkSwitcherNavComponent extends Component {
  get component() {
    const component =
      this.args.type === "tab"
        ? UkTabComponent
        : this.args.type === "subnav"
          ? UkSubnavComponent
          : null;

    assert(
      `The @type argument can of the \`UkSwitcher\` component be "tab" or "subnav", "${this.args.type}" was passed`,
      component,
    );

    return component;
  }

  <template>
    {{yield
      (hash
        component=(component
          (ensureSafeComponent this.component)
          contentId=@contentId
          active=@active
          animation=@animation
          animationDuration=@animationDuration
          swiping=@swiping
        )
      )
    }}
  </template>
}
