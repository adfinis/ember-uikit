import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class DocsComponentsSortableController extends Controller {
  @service notification;

  group1 = [
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3" },
    { label: "Item 4" },
  ];

  group2 = [
    { label: "Item 5" },
    { label: "Item 6" },
    { label: "Item 7" },
    { label: "Item 8" },
  ];

  @action
  notify(message) {
    this.notification.default(message);
  }
}
