import Component from "@glimmer/component";

import optionalArgument from "ember-uikit/-private/optional-argument";
import registerUikitEvents from "ember-uikit/modifiers/register-uikit-events";

export default class UkSwitcherContentItemComponent extends Component {
  @optionalArgument onBeforeShow;
  @optionalArgument onShow;
  @optionalArgument onShown;
  @optionalArgument onBeforeHide;
  @optionalArgument onHide;
  @optionalArgument onHidden;

  <template>
    <li
      {{registerUikitEvents
        beforeshow=this.onBeforeShow
        show=this.onShow
        shown=this.onShown
        beforehide=this.onBeforeHide
        hide=this.onHide
        hidden=this.onHidden
      }}
      ...attributes
    >
      {{yield}}
    </li>
  </template>
}
