import Component from "@glimmer/component";

import optionalArgument from "ember-uikit/-private/optional-argument";

export default class UkSortableComponent extends Component {
  @optionalArgument onStart;
  @optionalArgument onStop;
  @optionalArgument onMoved;
  @optionalArgument onAdded;
  @optionalArgument onRemoved;
}
