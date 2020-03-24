import Component from "@ember/component";
import layout from "../templates/components/uk-icon";

const UkIconComponent = Component.extend({
  layout,

  tagName: "span",

  attributeBindings: ["ukIcon:uk-icon", "icon", "ratio"],

  icon: "",

  ratio: 1,

  ukIcon: "",
});

UkIconComponent.reopenClass({
  positionalParams: ["icon"],
});

export default UkIconComponent;
