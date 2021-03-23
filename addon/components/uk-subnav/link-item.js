import LinkComponent from "@ember/routing/link-component";

import layout from "../../templates/components/uk-subnav/item";

export default LinkComponent.extend({
  layout,

  tagName: "li",

  activeClass: "uk-active",

  classNameBindings: ["disabled:uk-disabled"],

  disabled: false,
});
