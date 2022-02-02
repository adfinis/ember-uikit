import Route from "@ember/routing/route";

export default class DocsUtilitiesIndexRoute extends Route {
  redirect() {
    this.replaceWith("docs.utilities.flex");
  }
}
