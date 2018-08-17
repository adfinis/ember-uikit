import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  notification: service(),

  actions: {
    default() {
      this.notification.default("Default!");
    },
    primary() {
      this.notification.primary("Primary!");
    },
    success() {
      this.notification.success("Success!");
    },
    warning() {
      this.notification.warning("Warning!");
    },
    danger() {
      this.notification.danger("Danger!");
    }
  }
});
