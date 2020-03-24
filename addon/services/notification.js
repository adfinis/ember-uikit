import Service from "@ember/service";
import UIkit from "uikit";
import config from "ember-get-config";
import { Promise, resolve } from "rsvp";

const USER_CONFIG =
  (config["ember-uikit"] && config["ember-uikit"].notification) || {};

const notification = (status) =>
  function (message, options = {}) {
    return this._notification(message, Object.assign(options, { status }));
  };

export default Service.extend({
  _notification(message, options = {}) {
    const n = UIkit.notification(
      Object.assign(USER_CONFIG, options, { message })
    );

    return n && n.$el
      ? new Promise((resolve) => UIkit.util.on(n.$el, "close", resolve))
      : resolve();
  },

  default: notification("default"),
  primary: notification("primary"),
  success: notification("success"),
  warning: notification("warning"),
  danger: notification("danger"),
});
