import { getOwner } from "@ember/application";
import { assert } from "@ember/debug";
import { isDestroying } from "@ember/destroyable";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
// eslint-disable-next-line ember/no-observers
import { addObserver } from "@ember/object/observers";
import { scheduleOnce } from "@ember/runloop";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import UIkit from "uikit";

function isBubbling(event) {
  return event.target !== event.currentTarget;
}

export default class UkModal extends Component {
  _modal;
  _modalObserver;

  @tracked focusTrapActive = false;

  get btnClose() {
    return this.args.btnClose ?? true;
  }

  get modalId() {
    return `modal-${guidFor(this)}`;
  }

  get modalHeaderId() {
    return `${this.modalId}-header`;
  }

  get modalSelector() {
    return `#${this.modalId}`;
  }

  get containerSelector() {
    // Only set the container to the default if no query string was passed as argument.
    if (typeof this.args.container !== "string") {
      return getOwner(this).rootElement || "body";
    }

    return this.args.container;
  }

  get containerElement() {
    const containerElement = getOwner(this)
      .lookup("service:-document")
      .querySelector(this.containerSelector);

    assert(
      `Your specified @container query selector ${this.args.container} did not return an element. Check your query selector and check if the element actually exists.`,
      containerElement
    );

    return containerElement;
  }

  @action
  async toggleModal() {
    if (this.args.visible) {
      await this._modal?.show();
    } else {
      await this._modal?.hide();
    }
  }

  @action
  initialize(element) {
    this._modal = UIkit.modal(`#${element.id}`, {
      escClose: this.args.escClose ?? true,
      bgClose: this.args.bgClose ?? true,
      stack: this.args.stack ?? false,
      container: this.containerSelector,
      clsPage: this.args.clsPage ?? "uk-modal-page",
      clsPanel: this.args.clsPanel ?? "uk-modal-dialog",
      selClose:
        this.args.selClose ??
        [
          ".uk-modal-close",
          ".uk-modal-close-default",
          ".uk-modal-close-outside",
          ".uk-modal-close-full",
        ].join(","),
    });

    // eslint-disable-next-line ember/no-observers
    addObserver(this.args, "visible", this, "toggleModal");

    scheduleOnce("afterRender", this, "toggleModal");
    scheduleOnce("afterRender", this, "_registerMutationObserver");
  }

  @action
  teardown() {
    this._modalObserver.disconnect();
    this._modalObserver = null;

    this._modal?.$destroy(true);
    this._modal = null;
  }

  _registerMutationObserver() {
    UIkit.util.on(this.modalSelector, "hide", this.hide);
    UIkit.util.on(this.modalSelector, "show", this.show);

    // Setup a observer so we can activate the focus trap only once
    // the modal has stopped animating (otherwise this will cause errors).
    // To check if the modal has stopped animating, we can just check for
    // the `uk-open` class on the modal. If it extists then its finished.
    this._modalObserver = new MutationObserver((mutationList) => {
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
    this._modalObserver.observe(
      getOwner(this)
        .lookup("service:-document")
        .querySelector(this.modalSelector),
      { attributes: true, subtree: true, childList: false }
    );
  }

  @action
  async hide(event) {
    if (!isBubbling(event) && !isDestroying(this) && this.args.visible) {
      await this.args.onHide?.();
    }
  }

  @action
  async show(event) {
    if (!isBubbling(event) && !isDestroying(this) && !this.args.visible) {
      await this.args.onShow?.();
    }
  }
}
