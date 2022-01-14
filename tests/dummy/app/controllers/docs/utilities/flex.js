import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

import {
  FLEX_HORIZONTAL_OPTIONS,
  FLEX_VERTICAL_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FLEX_WRAP_ALIGNMENT_OPTIONS,
} from "ember-uikit/-private/flex";

export default class DocsUtilitiesFlexController extends Controller {
  horizontals = ["", ...Object.values(FLEX_HORIZONTAL_OPTIONS)];
  verticals = ["", ...Object.values(FLEX_VERTICAL_OPTIONS)];
  directions = ["", ...Object.values(FLEX_DIRECTION_OPTIONS)];
  wraps = ["", ...Object.values(FLEX_WRAP_OPTIONS)];
  wrapAlignments = ["", ...Object.values(FLEX_WRAP_ALIGNMENT_OPTIONS)];

  @tracked flex = true;
  @tracked inline = false;
  @tracked horizontal = "";
  @tracked vertical = "";
  @tracked direction = "";
  @tracked wrap = "";
  @tracked wrapAlignment = "";

  @tracked fill = false;
  @tracked fixHeight = false;
}
