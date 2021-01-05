import Component from "@ember/component";
import WidthMixin from "ember-uikit/mixins/width";

import layout from "../templates/components/uk-width";

const UkWidthComponent = Component.extend(WidthMixin, {
  layout,
});

UkWidthComponent.reopenClass({
  positionalParams: ["width"],
});

export default UkWidthComponent;
