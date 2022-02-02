import Route from "@ember/routing/route";

export default class DocsServicesIndexRoute extends Route {
  redirect() {
    this.replaceWith("docs.services.notification");
  }
}
