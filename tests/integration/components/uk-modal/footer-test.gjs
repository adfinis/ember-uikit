import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkModalFooter from "ember-uikit/components/uk-modal/footer";

module("Integration | Component | uk-modal/header", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(<template><UkModalFooter /></template>);

    assert.dom(".uk-modal-footer").hasText("");

    await render(
      <template>
        <UkModalFooter>
          template block text
        </UkModalFooter>
      </template>,
    );

    assert.dom(".uk-modal-footer").hasText("template block text");
  });
});
