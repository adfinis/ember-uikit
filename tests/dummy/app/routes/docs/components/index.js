import Route from "@ember/routing/route";

export default class DocsComponentsIndexRoute extends Route {
  redirect() {
    this.replaceWith("docs.components.badge");
  }
}
