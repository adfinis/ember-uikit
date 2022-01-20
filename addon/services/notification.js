import Service from "@ember/service";
import config from "ember-get-config";
import UIkit from "uikit";

function notification(status) {
  return function () {
    return {
      value(message, options = {}) {
        return this._notification(message, Object.assign(options, { status }));
      },
    };
  };
}

export default class NotificationService extends Service {
  _notification(message, options) {
    const n = UIkit.notification(
      Object.assign(config["ember-uikit"]?.notification ?? {}, options, {
        message,
      })
    );

    return n?.$el
      ? new Promise((resolve) => UIkit.util.on(n.$el, "close", resolve))
      : Promise.resolve();
  }

  @notification("default") default;
  @notification("primary") primary;
  @notification("success") success;
  @notification("warning") warning;
  @notification("danger") danger;
}
