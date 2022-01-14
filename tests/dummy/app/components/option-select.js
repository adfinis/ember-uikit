import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class OptionSelectComponent extends Component {
  @action
  change(event) {
    event.preventDefault();

    this.args.onChange(event.target.value);
  }
}
