import Component from "@glimmer/component";

import optionalArgument from "ember-uikit/-private/optional-argument";

export default class UkSwitcherContentItemComponent extends Component {
  @optionalArgument onBeforeShow;
  @optionalArgument onShow;
  @optionalArgument onShown;
  @optionalArgument onBeforeHide;
  @optionalArgument onHide;
  @optionalArgument onHidden;
}
