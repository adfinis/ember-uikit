import { getOwner } from "@ember/application";
import { assert } from "@ember/debug";
import { fn, hash } from "@ember/helper";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { focusTrap } from "ember-focus-trap";

import UkModalBody from "ember-uikit/components/uk-modal/body";
import UkModalFooter from "ember-uikit/components/uk-modal/footer";
import UkModalHeader from "ember-uikit/components/uk-modal/header";
import container from "ember-uikit/container";
import trimmedJoin from "ember-uikit/helpers/trimmed-join";
import ukModal from "ember-uikit/modifiers/uk-modal";

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

  <template>
    {{#in-element this.containerElement insertBefore=null}}
      <div
        id={{this.modalId}}
        class={{@modalClass}}
        {{ukModal
          escClose=@escClose
          bgClose=@bgClose
          stack=@stack
          container=this.containerSelector
          clsPage=@clsPage
          selClose=@selClose
          visible=@visible
          onHide=this.hide
          onHidden=(fn (mut this.focusTrapActive) false)
          onShow=this.show
          onShown=(fn (mut this.focusTrapActive) true)
        }}
        ...attributes
      >
        <div
          class={{trimmedJoin "uk-modal-dialog" @dialogClass}}
          role="dialog"
          aria-modal="true"
          aria-labelledby={{this.modalHeaderId}}
          tabindex="-1"
          {{focusTrap
            isActive=this.focusTrapActive
            shouldSelfFocus=true
            focusTrapOptions=(hash
              escapeDeactivates=true
              clickOutsideDeactivates=true
              returnFocusOnDeactivate=true
              preventScroll=true
            )
          }}
        >
          {{#if this.btnClose}}
            <button
              class="uk-modal-close-default"
              type="button"
              uk-close
            ></button>
          {{/if}}
          {{yield
            (hash
              header=(component UkModalHeader id=this.modalHeaderId)
              body=(component UkModalBody)
              footer=(component UkModalFooter)
            )
          }}
        </div>
      </div>
    {{/in-element}}
  </template>
}
