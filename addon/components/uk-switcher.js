import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";

export default class UkSwitcherComponent extends Component {
  get contentId() {
    return `uk-switcher-content-${guidFor(this)}`;
  }
}
