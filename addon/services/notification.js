import { getOwner } from "@ember/application";
import Service from "@ember/service";
import UIkit from "uikit";

function notification(status) {
  return function () {
    return {
      value(message, options = {}) {
        const config =
          getOwner(this).resolveRegistration("config:environment")[
            "ember-uikit"
          ]?.notification ?? {};

        const n = UIkit.notification({
          ...config,
          ...options,
          status,
          message,
        });

        return n?.$el
          ? new Promise((resolve) => UIkit.util.on(n.$el, "close", resolve))
          : Promise.resolve();
      },
    };
  };
}

export default class NotificationService extends Service {
  @notification("default") default;
  @notification("primary") primary;
  @notification("success") success;
  @notification("warning") warning;
  @notification("danger") danger;
}
