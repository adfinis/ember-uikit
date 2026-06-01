import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkModalBody from "ember-uikit/components/uk-modal/body";

module("Integration | Component | uk-modal/body", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(<template><UkModalBody /></template>);

    assert.dom(".uk-modal-body").hasText("");

    await render(
      <template>
        <UkModalBody>
          template block text
        </UkModalBody>
      </template>,
    );

    assert.dom(".uk-modal-body").hasText("template block text");
  });
});
