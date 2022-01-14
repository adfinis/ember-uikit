import Component from "@glimmer/component";

import flex from "ember-uikit/-private/flex";

export default class UkFlexComponent extends Component {
  @flex({ prefix: "" }) flex = true;
}
