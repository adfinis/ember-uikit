import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class DocsServicesNotificationController extends Controller {
  @service notification;

  @action
  default() {
    this.notification.default("Default!");
  }
  @action
  primary() {
    this.notification.primary("Primary!");
  }

  @action
  success() {
    this.notification.success("Success!");
  }

  @action
  warning() {
    this.notification.warning("Warning!");
  }

  @action
  danger() {
    this.notification.danger("Danger!");
  }
}
