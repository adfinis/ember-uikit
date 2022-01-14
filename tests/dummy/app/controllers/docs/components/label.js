import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

import { LABEL_COLOR_OPTIONS } from "ember-uikit/components/uk-label";

export default class DocsComponentsLabelController extends Controller {
  @tracked label = "label";
  @tracked color = "";

  colors = LABEL_COLOR_OPTIONS;
}
