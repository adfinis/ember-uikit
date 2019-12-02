import Component from "@ember/component";
import { computed } from "@ember/object";
import layout from "../templates/components/uk-modal";
import UIkit from "uikit";
import { scheduleOnce } from "@ember/runloop";
import { getOwner } from "@ember/application";

const noop = () => {};

export default Component.extend({
  layout,

  modalClass: "",
  dialogClass: "",
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

  modalId: computed("elementId", function() {
    return `modal-${this.elementId}`;
  }),

  containerElement: computed("container", function() {
    return getOwner(this)
      .lookup("service:-document")
      .querySelector(this.container);
  }),

  init() {
    this._super(...arguments);

    const config = getOwner(this).resolveRegistration("config:environment");

    this.set("container", config.APP.rootElement || "body");
  },

  didInsertElement() {
    this.set(
      "modal",
      UIkit.modal(
        `#${this.modalId}`,
        this.getProperties(
          "escClose",
          "bgClose",
          "stack",
          "container",
          "clsPage",
          "clsPanel",
          "selClose"
        )
      )
    );
  },

  didReceiveAttrs() {
    scheduleOnce("afterRender", this, "toggleModal");
  },

  willDestroyElement() {
    if (this.modal) {
      this.modal.$destroy(true);

      this.set("modal", null);
    }
  },

  toggleModal() {
    if (!this.modal) return;

    if (this.visible) {
      this.modal.show();

      UIkit.util.on(`#${this.modalId}`, "hidden", () =>
        this.getWithDefault("on-hide", noop)
      );
    } else {
      this.modal.hide();

      UIkit.util.on(`#${this.modalId}`, "show", () =>
        this.getWithDefault("on-show", noop)
      );
    }
  }
});
