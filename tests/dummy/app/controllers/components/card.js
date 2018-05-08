import Controller from "@ember/controller";
import { CARD_COLOR_OPTIONS } from "ember-uikit/components/uk-card";

export default Controller.extend({
  color: "default",
  hover: false,
  size: "",
  width: "1-1 1-2@m",

  colors: CARD_COLOR_OPTIONS
});
