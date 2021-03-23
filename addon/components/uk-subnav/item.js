import Component from "@ember/component";
import EventedMixin from "ember-uikit/mixins/evented";

import layout from "../../templates/components/uk-subnav/item";

export default Component.extend(EventedMixin, {
  layout,

  tagName: "li",

  classNameBindings: ["active:uk-active", "disabled:uk-disabled"],

  active: false,

  disabled: false,
});
