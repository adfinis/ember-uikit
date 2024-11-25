import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ExampleController extends Controller {
  @service notification;

  @action
  save() {
    try {
      // your code

      this.notification.success("Successfully saved!");
    } catch {
      this.notification.danger("Ooops! Something went wrong...");
    }
  }
}
