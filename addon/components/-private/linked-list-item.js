import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";

function getParams(currentRouteInfo) {
  let params = [];

  while (currentRouteInfo.parent) {
    params = [currentRouteInfo.params, ...params];
    currentRouteInfo = currentRouteInfo.parent;
  }

  return params.map(Object.values).flat();
}

export default class LinkedListItemComponent extends Component {
  @service("router") _router;

  /* istanbul ignore next */
  get isEngineRouter() {
    return Boolean(this._router.externalRouter);
  }

  get router() {
    // Use the external router in engines that use `ember-engines-router-service`
    return this._router.externalRouter ?? this._router;
  }

  get href() {
    if (!this.args.href) return null;

    /* istanbul ignore next */
    if (this.isEngineRouter) {
      const engineRoot = this._router.urlFor("application");

      // Append the engine root to the url in case the engine didn't already
      return this.args.href.startsWith(engineRoot)
        ? this.args.href
        : `${engineRoot}${this.args.href}`;
    }

    return this.args.href;
  }

  get route() {
    if (!this.href) return null;

    let href = this.href;

    /* istanbul ignore next */
    if (this.router.location.implementation === "hash") {
      href = href.replace(/^#/, "");
    }

    /* istanbul ignore next */
    if (!href.startsWith(this.router.rootURL)) {
      href = `${this.router.rootURL}${href}`;
    }

    const routeInfo = this.router.recognize(href);

    if (!routeInfo) return null;

    return { routeInfo, dynamicSegments: getParams(routeInfo) };
  }

  get active() {
    if (!this.route || this.args.active !== undefined) {
      return this.args.active ?? false;
    }

    const { routeInfo, dynamicSegments } = this.route;

    return this.router.isActive(routeInfo.name, ...dynamicSegments, {
      queryParams: routeInfo.queryParams,
    });
  }

  @action
  navigate(event) {
    event.preventDefault();

    if (typeof this.args.onClick === "function") {
      this.args.onClick(...[event, this.href].filter(Boolean));
    } else if (this.route) {
      const { routeInfo, dynamicSegments } = this.route;
      this.router.transitionTo(routeInfo.name, ...dynamicSegments, {
        queryParams: routeInfo.queryParams,
      });
    }
  }
}
