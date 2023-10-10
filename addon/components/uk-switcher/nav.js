import { assert } from "@ember/debug";
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
}
