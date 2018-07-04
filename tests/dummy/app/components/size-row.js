import Component from "@ember/component";
import { SIZE_OPTIONS } from "ember-uikit/mixins/size";

export default Component.extend({
  tagName: "tr",
  default: "",
  sizes: Object.values(SIZE_OPTIONS)
});
