import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

import {
  SIZE_OPTIONS,
  COLOR_OPTIONS,
} from "ember-uikit/components/uk-toggle-switch";

export default class DocsComponentsToggleSwitchController extends Controller {
  @tracked size = SIZE_OPTIONS.MEDIUM;
  @tracked color = COLOR_OPTIONS.ONOFF;
  @tracked value = true;
  @tracked name = "test";
  @tracked onLabel = "On";
  @tracked offLabel = "Off";
  @tracked showLabels = true;
  @tracked disabled = false;

  sizes = Object.values(SIZE_OPTIONS);
  colors = Object.values(COLOR_OPTIONS);
}
