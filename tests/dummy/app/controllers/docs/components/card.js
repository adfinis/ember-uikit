import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

import { CARD_COLOR_OPTIONS } from "ember-uikit/components/uk-card";

export default class DocsComponentsCardController extends Controller {
  @tracked color = "default";
  @tracked hover = false;
  @tracked size = "";
  @tracked width = "1-1 1-2@m";

  colors = CARD_COLOR_OPTIONS;
}
