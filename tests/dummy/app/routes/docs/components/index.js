import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class DocsComponentsIndexRoute extends Route {
  @service router;

  redirect() {
    this.router.replaceWith("docs.components.badge");
  }
}
