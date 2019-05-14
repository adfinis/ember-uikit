import Component from "@ember/component";
import layout from "../templates/components/uk-modal";
import UIkit from "uikit";
import { scheduleOnce } from "@ember/runloop";
import { getOwner } from "@ember/application";

const noop = () => {};

export default Component.extend({
  layout,

  btnClose: true,
  escClose: true,
  bgClose: true,
  stack: false,
  container: true,
  clsPage: "uk-modal-page",
  clsPanel: "uk-modal-dialog",
  selClose: [
    ".uk-modal-close",
    ".uk-modal-close-default",
    ".uk-modal-close-outside",
    ".uk-modal-close-full"
  ].join(", "),

  init() {
    this._super(...arguments);

    const { APP } = getOwner(this).resolveRegistration("config:environment");

    this.set("container", document.querySelector(APP.rootElement || "body"));
  },

  _show() {
    this.getWithDefault("on-show", noop)();
  },

  _hide() {
    this.getWithDefault("on-hide", noop)();
  },

  didInsertElement() {
    const id = `#modal-${this.elementId}`;

    this.set(
      "modal",
      UIkit.modal(id, {
        escClose: this.get("escClose"),
        bgClose: this.get("bgClose"),
        stack: this.get("stack"),
        container: this.get("container"),
        clsPage: this.get("clsPage"),
        clsPanel: this.get("clsPanel"),
        selClose: this.get("selClose")
      })
    );

    UIkit.util.on(id, "show", () => this._show());
    UIkit.util.on(id, "hide", () => this._hide());
  },

  didReceiveAttrs() {
    scheduleOnce("afterRender", () => {
      this.visible ? this.modal.show() : this.modal.hide();
    });
  },

  willDestroyElement() {
    this.modal.$el.parentNode.removeChild(this.modal.$el);
    this.set("modal", null);
  }
});
