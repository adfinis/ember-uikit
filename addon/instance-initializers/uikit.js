import UIkit from "uikit";

export function initialize(appInstance) {
  UIkit.container = appInstance.rootElement;
}

export default { initialize };
