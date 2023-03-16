import { registerDestructor } from "@ember/destroyable";
import Modifier from "ember-modifier";
import UIkit from "uikit";

export default class UkModalModifier extends Modifier {
  #modal;
  #events;

  constructor(owner, args) {
    super(owner, args);

    registerDestructor(this, () => {
      this.#events.forEach(([event, handler]) => {
        UIkit.util.off(this.#modal.$el, event, handler);
      });

      this.#modal.$destroy();
    });
  }

  modify(element, positional, named) {
    if (!this.#modal) {
      this.initialize(element, positional, named);
    }

    if (named.visible) {
      this.#modal.show();
    } else {
      this.#modal.hide();
    }
  }

  initialize(element, positional, named) {
    this.#events = [
      ["hide", named.onHide],
      ["hidden", named.onHidden],
      ["show", named.onShow],
      ["shown", named.onShown],
    ];

    this.#modal = UIkit.modal(element, {
      escClose: named.escClose ?? true,
      bgClose: named.bgClose ?? true,
      stack: named.stack ?? false,
      container: named.container,
      clsPage: named.clsPage ?? "uk-modal-page",
      selClose:
        named.selClose ??
        ".uk-modal-close,.uk-modal-close-default,.uk-modal-close-outside,.uk-modal-close-full",
    });

    this.#events.forEach(([event, handler]) => {
      UIkit.util.on(this.#modal.$el, event, handler);
    });
  }
}
