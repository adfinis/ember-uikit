import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";

function getParams(currentRouteInfo) {
  const params = currentRouteInfo.paramNames.map(
    (key) => currentRouteInfo.params[key],
  );

  if (currentRouteInfo.parent) {
    return [...getParams(currentRouteInfo.parent), ...params];
  }

  return params;
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

    /* istanbul ignore next */
    if (!routeInfo) return null;

    return {
      name: this.args.linkToIndex
        ? routeInfo.name
        : routeInfo.name.replace(/\.index$/, ""),
      args: [
        ...getParams(routeInfo),
        ...(Object.keys(routeInfo.queryParams)
          ? [{ queryParams: routeInfo.queryParams }]
          : []),
      ],
    };
  }

  get active() {
    if (!this.route || this.args.active !== undefined) {
      return this.args.active ?? false;
    }

    const { name, args } = this.route;

    return this.router.isActive(name, ...args);
  }

  @action
  navigate(event) {
    event.preventDefault();

    if (typeof this.args.onClick === "function") {
      this.args.onClick(...[event, this.href].filter(Boolean));
    } else if (this.route) {
      const { name, args } = this.route;
      this.router.transitionTo(name, ...args);
    }
  }
}
