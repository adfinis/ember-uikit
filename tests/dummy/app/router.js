import EmberRouter from "@ember/routing/router";

import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line array-callback-return
Router.map(function () {
  this.route("docs", function () {
    this.route("components", function () {
      this.route("badge");
      this.route("button");
      this.route("card");
      this.route("icon");
      this.route("label");
      this.route("list");
      this.route("modal");
      this.route("sortable");
      this.route("spinner");
      this.route("subnav");
      this.route("switcher");
      this.route("tab");
      this.route("toggle-switch");
    });

    this.route("utilities", function () {
      this.route("flex");
      this.route("width");
    });

    this.route("services", function () {
      this.route("notification");
    });
  });
});
