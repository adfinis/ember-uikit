import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { task, timeout } from "ember-concurrency";

import { BUTTON_COLOR_OPTIONS } from "ember-uikit/components/uk-button";

export default class DocsComponentsButtonController extends Controller {
  @tracked firedEvents = [];

  @tracked label = "Button";
  @tracked type = "button";
  @tracked disabled = false;
  @tracked active = false;
  @tracked loading = false;
  @tracked color = "primary";
  @tracked size = "";
  @tracked width = "";
  @tracked title = "";

  colors = Object.values(BUTTON_COLOR_OPTIONS);

  fireEvent = task(async (name) => {
    this.firedEvents = [...this.firedEvents, name];
    await timeout(1000);
    this.firedEvents = this.firedEvents.filter((e) => e !== name);
  });
}
