import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { task, timeout } from "ember-concurrency";

export default class DocsComponentsTabController extends Controller {
  @service router;

  @tracked firedEvents = [];

  @tracked itemActive = false;
  @tracked itemDisabled = false;
  @tracked linkItemDisabled = false;
  @tracked href = this.router.currentURL;

  get availableRoutes() {
    // eslint-disable-next-line ember/no-private-routing-service
    return Object.keys(this.router._router._routerMicrolib.recognizer.names)
      .filter(
        (name) =>
          !name.endsWith("error") &&
          !name.endsWith("loading") &&
          ![
            "application",
            "docs",
            "docs.index",
            "docs.components",
            "docs.components.index",
            "docs.utilities",
            "docs.utilities.index",
            "docs.services",
            "docs.services.index",
          ].includes(name)
      )
      .map((name) => this.router.urlFor(name));
  }

  @task
  *fireEvent(name) {
    this.firedEvents = [...this.firedEvents, name];
    yield timeout(1000);
    this.firedEvents = this.firedEvents.filter((e) => e !== name);
  }
}
