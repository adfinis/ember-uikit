import Component from "@ember/component";
import { computed } from "@ember/object";
import layout from "../../templates/components/uk-switcher/nav";

export const TYPES = {
  TAB: { name: "tab", componentName: "uk-tab" },
  SUBNAV: { name: "subnav", componentName: "uk-subnav" }
};

export default Component.extend({
  layout,

  type: TYPES.TAB,

  tagName: "",

  componentName: computed("type", function() {
    return TYPES[
      Object.keys(TYPES).find(k => TYPES[k].name === this.get("type"))
    ].componentName;
  })
});
