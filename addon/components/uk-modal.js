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
    ".uk-modal-close-full",
  ].join(", "),

  isAnimating: false,

  modalId: computed("elementId", function () {
    return `modal-${this.elementId}`;
  }),

  modalHeaderId: computed("modalId", function () {
    return `${this.modalId}-header`;
  }),

  modalSelector: computed("modalId", function () {
    return `#${this.modalId}`;
  }),

  containerElement: computed("container", function () {
    return getOwner(this)
      .lookup("service:-document")
      .querySelector(this.container);
  }),

  init() {
    this._super(...arguments);

    this.set("container", getOwner(this).rootElement || "body");

    this.set("eventHandlers", {
      hide: async (event) => {
        if (event.currentTarget === event.target) {
          if (this.visible) {
            await (this["on-hide"] ?? noop)();
          }
        }
      },

      hidden: (event) => {
        if (event.currentTarget === event.target) {
          this.set("isAnimating", false);
        }
      },

      show: async (event) => {
        if (event.currentTarget === event.target) {
          if (this.visible) {
            await (this["on-show"] ?? noop)();
          }
        }
      },

      shown: (event) => {
        if (event.currentTarget === event.target) {
          this.set("isAnimating", false);
        }
      },

      beforehide: (event) => {
        if (event.currentTarget === event.target) {
          this.set("isAnimating", true);
        }
      },

      beforeshow: (event) => {
        if (event.currentTarget === event.target) {
          this.set("isAnimating", true);
        }
      },
    });
  },

  didInsertElement() {
    this.set(
      "modal",
      UIkit.modal(`#${this.modalId}`, {
        escClose: this.escClose,
        bgClose: this.bgClose,
        stack: this.stack,
        container: this.container,
        clsPage: this.clsPage,
        clsPanel: this.clsPanel,
        selClose: this.selClose,
      })
    );

    scheduleOnce("afterRender", this, "_setupEvents");
  },

  didReceiveAttrs() {
    scheduleOnce("afterRender", this, "toggleModal");
  },

  willDestroyElement() {
    if (this.modal) {
      this._teardownEvents();

      this.modal.$destroy(true);

      this.set("modal", null);
    }
  },

  _setupEvents() {
    Object.keys(this.eventHandlers).forEach((event) => {
      UIkit.util.on(
        this.modalSelector,
        event,
        this.get(`eventHandlers.${event}`)
      );
    });
  },

  _teardownEvents() {
    Object.keys(this.eventHandlers).forEach((event) => {
      UIkit.util.off(
        this.modalSelector,
        event,
        this.get(`eventHandlers.${event}`)
      );
    });
  },

  async toggleModal() {
    if (!this.modal) return;

    if (this.visible) {
      await this.modal.show();
    } else {
      await this.modal.hide();
    }
  },
});
