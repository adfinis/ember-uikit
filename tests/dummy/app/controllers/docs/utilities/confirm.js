import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { confirm } from "ember-uikit";

export default class DocsUtilitiesConfirmController extends Controller {
  @tracked text = "Test";
  @tracked result = "";

  @action
  async click(e) {
    e.preventDefault();

    this.result = await confirm(this.text);
  }
}
