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
  @service router;

  get active() {
    if (!this.args.href || this.args.active !== undefined) {
      return this.args.active ?? false;
    }

    const routeInfo = this.router.recognize(this.args.href);
    const dynamicSegments = getParams(routeInfo);

    return this.router.isActive(routeInfo.name, ...dynamicSegments, {
      queryParams: routeInfo.queryParams,
    });
  }

  @action
  navigate(event) {
    event.preventDefault();

    if (typeof this.args.onClick === "function") {
      this.args.onClick(...[event, this.args.href].filter(Boolean));
    } else if (this.args.href) {
      this.router.transitionTo(this.args.href);
    }
  }
}
