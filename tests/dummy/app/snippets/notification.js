import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  notification: service(),

  actions: {
    save() {
      try {
        // your code

        this.notification.success("Successfully saved!");
      } catch (e) {
        this.notification.error("Ooops! Something went wrong...");
      }
    }
  }
});
