import Route from "@ember/routing/route";
import { service } from "@ember/service";

export default class DocsServicesIndexRoute extends Route {
  @service router;

  redirect() {
    this.router.replaceWith("docs.services.notification");
  }
}
