import Component from "@glimmer/component";

import optionalArgument from "ember-uikit/-private/optional-argument";
import registerUikitEvents from "ember-uikit/modifiers/register-uikit-events";

export default class UkSortableComponent extends Component {
  @optionalArgument onStart;
  @optionalArgument onStop;
  @optionalArgument onMoved;
  @optionalArgument onAdded;
  @optionalArgument onRemoved;

  <template>
    <div
      class="uk-sortable"
      uk-sortable
      group={{@group}}
      handle={{@handle}}
      animation={{@animationDuration}}
      threshold={{@threshold}}
      cls-item={{@clsItem}}
      cls-placeholder={{@clsPlaceholder}}
      cls-drag={{@clsDrag}}
      cls-drag-state={{@clsDragState}}
      cls-base={{@clsBase}}
      cls-no-drag={{@clsNoDrag}}
      cls-empty={{@clsEmpty}}
      cls-custom={{@clsCustom}}
      {{registerUikitEvents
        start=this.onStart
        stop=this.onStop
        moved=this.onMoved
        added=this.onAdded
        removed=this.onRemoved
      }}
      ...attributes
    >
      {{yield}}
    </div>
  </template>
}
