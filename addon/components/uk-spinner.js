import Component from "@ember/component";

import layout from "../templates/components/uk-spinner";

export default Component.extend({
  layout,

  tagName: "div",

  attributeBindings: ["spinner:uk-spinner", "ratio"],

  spinner: "",

  ratio: 1,
});
