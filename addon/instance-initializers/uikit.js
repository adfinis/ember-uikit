import { getOwner } from "@ember/application";
import UIkit from "uikit";

export function initialize(appInstance) {
  // As there is only a single `Router` across the whole app, which is owned
  // by the root `Application`, this reliably finds the root `Application`
  // from an `Application` or `Engine`.
  // eslint-disable-next-line ember/no-private-routing-service
  const hostApp = getOwner(appInstance.lookup("router:main"));

  UIkit.container = hostApp.rootElement;
}

export default { initialize };
