import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class DocsModifiersIndexRoute extends Route {
  @service router;

  redirect() {
    this.router.replaceWith("docs.modifiers.tooltip");
  }
}
