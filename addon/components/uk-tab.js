import Component from "@ember/component";
import FlexMixin from "ember-uikit/mixins/flex";
import SwitcherMixin from "ember-uikit/mixins/switcher";

import layout from "../templates/components/uk-tab";

export default Component.extend(SwitcherMixin, FlexMixin, {
  layout,

  init(...args) {
    this._super(...args);

    this.set(
      "attributeBindings",
      this.attributeBindings.filter((i) => i !== "ukSwitcher:uk-switcher")
    );
  },

  tagName: "ul",

  attributeBindings: ["ukSwitcher:uk-tab"],

  classNames: ["uk-tab"],

  classNameBindings: [
    "left:uk-tab-left",
    "right:uk-tab-right",
    "bottom:uk-tab-bottom",
  ],

  left: false,
  right: false,
  bottom: false,
});
