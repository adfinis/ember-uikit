import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class OptionSelectComponent extends Component {
  @action
  change(event) {
    event.preventDefault();

    const value = event.target.value;
    this.args.onChange(value === "" ? null : value);
  }
}
