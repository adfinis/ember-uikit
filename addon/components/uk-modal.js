import Component from "@ember/component";
import layout from "../templates/components/uk-modal";
import UIkit from "uikit";
import { scheduleOnce } from "@ember/runloop";
import { getOwner } from "@ember/application";

export default Component.extend({
  layout,

  closable: true,

  init() {
    this._super(...arguments);

    const { APP } = getOwner(this).resolveRegistration("config:environment");

    this.set("container", document.querySelector(APP.rootElement || "body"));
  },

  _show() {
    this.modal && this.set("visible", true);
  },

  _hide() {
    this.modal && this.set("visible", false);
  },

  didInsertElement() {
    const id = `#modal-${this.elementId}`;

    this.set(
      "modal",
      UIkit.modal(id, {
        container: false,
        bgClose: this.get("closable"),
        escClose: this.get("closable")
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
