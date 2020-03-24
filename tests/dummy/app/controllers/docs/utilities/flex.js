import Controller from "@ember/controller";
import {
  FLEX_HORIZONTAL_OPTIONS,
  FLEX_VERTICAL_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FLEX_WRAP_ALIGNMENT_OPTIONS,
} from "ember-uikit/mixins/flex";

export default Controller.extend({
  horizontals: Object.values(FLEX_HORIZONTAL_OPTIONS),
  verticals: Object.values(FLEX_VERTICAL_OPTIONS),
  directions: Object.values(FLEX_DIRECTION_OPTIONS),
  wraps: Object.values(FLEX_WRAP_OPTIONS),
  wrapAlignments: Object.values(FLEX_WRAP_ALIGNMENT_OPTIONS),

  flex: true,
  inline: false,
  horizontal: "",
  vertical: "",
  direction: "",
  wrap: "",
  wrapAlignment: "",

  fill: false,
  fixHeight: false,
});
