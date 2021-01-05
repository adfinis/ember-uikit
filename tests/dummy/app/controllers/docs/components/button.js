import { A } from "@ember/array";
import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { timeout } from "ember-concurrency";
import { dropTask } from "ember-concurrency-decorators";
import { BUTTON_COLOR_OPTIONS } from "ember-uikit/components/uk-button";

export default class extends Controller {
  @tracked firedEvents = A();

  @tracked label = "Button";
  @tracked type = "button";
  @tracked disabled = false;
  @tracked active = false;
  @tracked loading = false;
  @tracked color = "default";
  @tracked size = "";
  @tracked width = "";
  @tracked title = "";

  colors = BUTTON_COLOR_OPTIONS;

  @dropTask
  *fireEvent(name) {
    this.firedEvents.pushObject(name);

    yield timeout(1000);

    this.firedEvents.removeObject(name);
  }
}
