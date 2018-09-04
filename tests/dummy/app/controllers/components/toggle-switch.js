import Controller from "@ember/controller";
import {
  SIZE_OPTIONS,
  COLOR_OPTIONS
} from "ember-uikit/components/uk-toggle-switch";

export default Controller.extend({
  size: SIZE_OPTIONS.MEDIUM,
  color: COLOR_OPTIONS.ONOFF,
  value: true,
  name: "test",
  onLabel: "On",
  offLabel: "Off",
  showLabels: true,
  disabled: false,

  sizes: Object.values(SIZE_OPTIONS),
  colors: Object.values(COLOR_OPTIONS)
});
