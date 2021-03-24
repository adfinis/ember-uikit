import { getOwner } from "@ember/application";
import Component from "@ember/component";
import { assert } from "@ember/debug";
import { guidFor } from "@ember/object/internals";
import { scheduleOnce } from "@ember/runloop";
import { tracked } from "@glimmer/tracking";
import UIkit from "uikit";

import layout from "../templates/components/uk-modal";

const noop = () => {};

export default class UkModal extends Component {
  layout = layout;

  modalId = `modal-${guidFor(this)}`;

  @tracked modal;
  @tracked container = true;
  @tracked modalClass = "";
  @tracked dialogClass = "";
  @tracked btnClose = true;
  @tracked escClose = true;
  @tracked bgClose = true;
  @tracked stack = false;
  @tracked clsPage = "uk-modal-page";
  @tracked clsPanel = "uk-modal-dialog";
  @tracked selClose = [
    ".uk-modal-close",
    ".uk-modal-close-default",
    ".uk-modal-close-outside",
    ".uk-modal-close-full",
  ].join(", ");

  @tracked isAnimating = false;
  @tracked focusTrapActive = false;

  modalObserver = null;

  get modalHeaderId() {
    return `${this.modalId}-header`;
  }

  get modalSelector() {
    return `#${this.modalId}`;
  }

  get containerSelector() {
    // Only set the container to the default if no query string was passed as argument.
    if (typeof this.container !== "string") {
      return getOwner(this).rootElement || "body";
    }

    return this.container;
  }

  get containerElement() {
    const document = getOwner(this).lookup("service:-document");
    const containerElement = document.querySelector(this.containerSelector);

    assert(
      `Your specified @container query selector ${this.container} did not return an element. Check your query selector and check if the element actually exists.`,
      containerElement
    );
    return containerElement;
  }

  constructor(...args) {
    super(...args);

    this.eventHandlers = {
      hide: async (event) => {
        if (event.currentTarget === event.target) {
          if (this.visible) {
            await (this["on-hide"] ?? noop)();
          }
        }
      },

      hidden: (event) => {
        if (event.currentTarget === event.target) {
          this.isAnimating = false;
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
          this.isAnimating = false;
        }
      },

      beforehide: (event) => {
        if (event.currentTarget === event.target) {
          this.isAnimating = true;
        }
      },

      beforeshow: (event) => {
        if (event.currentTarget === event.target) {
          this.isAnimating = true;
        }
      },
    };
  }

  didInsertElement(...args) {
    super.didInsertElement(...args);
    this.modal = UIkit.modal(`#${this.modalId}`, {
      escClose: this.escClose,
      bgClose: this.bgClose,
      stack: this.stack,
      container: this.containerSelector,
      clsPage: this.clsPage,
      clsPanel: this.clsPanel,
      selClose: this.selClose,
    });

    scheduleOnce("afterRender", this, "_setupEvents");
  }

  didReceiveAttrs() {
    super.didReceiveAttrs();
    scheduleOnce("afterRender", this, "toggleModal");
  }

  willDestroyElement(...args) {
    super.willDestroyElement(...args);
    if (this.modal) {
      this._teardownEvents();

      this.modal.$destroy(true);

      this.modal = null;
    }
  }

  _setupEvents() {
    Object.keys(this.eventHandlers).forEach((event) => {
      UIkit.util.on(this.modalSelector, event, this.eventHandlers[event]);
    });

    // Setup a observer so we can avtivate the focus trap only once
    // the modal has stopped animating (otherwise this will cause errors).
    // To check if the modal has stopped animating, we can just check for
    // the `uk-open` class on the modal. If it extists then its finished.
    this.modalObserver = new MutationObserver((mutationList) => {
      const mutations = mutationList
        .filter(
          ({ target, attributeName }) =>
            target.id === this.modalId && attributeName === "class"
        )
        .map((mutation) => mutation.target.classList);

      // Short-circuit if no mutations match the filter
      if (!mutations.length) {
        return;
      }

      this.focusTrapActive = mutations.every((classList) =>
        classList.contains("uk-open")
      );
    });
    this.modalObserver.observe(
      getOwner(this)
        .lookup("service:-document")
        .querySelector(this.modalSelector),
      { attributes: true, subtree: true, childList: false }
    );
  }

  _teardownEvents() {
    Object.keys(this.eventHandlers).forEach((event) => {
      UIkit.util.off(this.modalSelector, event, this.eventHandlers[event]);
    });
    this.modalObserver.disconnect();
  }

  async toggleModal() {
    if (!this.modal) return;

    if (this.visible) {
      await this.modal.show();
    } else {
      await this.modal.hide();
    }
  }
}
