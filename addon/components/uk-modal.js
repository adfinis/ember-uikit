import { getOwner } from "@ember/application";
import { assert } from "@ember/debug";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

import container from "ember-uikit/container";

function isBubbling(event) {
  return event.target !== event.currentTarget;
}

export default class UkModal extends Component {
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

  get containerSelector() {
    // Only set the container to the default if no query string was passed as argument.
    if (typeof this.args.container !== "string") {
      return container.selector ?? "body";
    }

    return this.args.container;
  }

  get containerElement() {
    const containerElement = getOwner(this)
      .lookup("service:-document")
      .querySelector(this.containerSelector);

    assert(
      `Your specified @container query selector ${this.args.container} did not return an element. Check your query selector and check if the element actually exists.`,
      containerElement,
    );

    return containerElement;
  }

  @action hide(event) {
    if (!isBubbling(event) && this.args.visible) {
      this.args.onHide?.();
    }
  }

  @action show(event) {
    if (!isBubbling(event) && !this.args.visible) {
      this.args.onShow?.();
    }
  }
}
