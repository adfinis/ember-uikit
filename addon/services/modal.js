import { getOwner } from "@ember/application";
import Service from "@ember/service";
import UIkit from "uikit";

function modal(type) {
  return function () {
    return {
      async value(message, options = {}) {
        try {
          const config =
            getOwner(this).resolveRegistration("config:environment")[
              "ember-uikit"
            ]?.modal ?? {};

          await UIkit.modal[type](message, {
            ...config,
            ...options,
          });

          return true;
        } catch (e) {
          return false;
        }
      },
    };
  };
}

export default class ModalService extends Service {
  @modal("alert") alert;
  @modal("confirm") confirm;
  @modal("prompt") prompt;
  @modal("dialog") dialog;
}
