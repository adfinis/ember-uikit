import Component from "@glimmer/component";

import width from "ember-uikit/-private/width";

export default class UkWidthComponent extends Component {
  @width width;

  <template>
    <div class={{this.width}} ...attributes>
      {{yield}}
    </div>
  </template>
}
