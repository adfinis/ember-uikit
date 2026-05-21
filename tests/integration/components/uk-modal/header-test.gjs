import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkModalHeader from "ember-uikit/components/uk-modal/header";

module("Integration | Component | uk-modal/footer", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(<template><UkModalHeader /></template>);

    assert.dom(".uk-modal-header").hasText("");

    await render(
      <template>
        <UkModalHeader>
          template block text
        </UkModalHeader>
      </template>,
    );

    assert.dom(".uk-modal-header").hasText("template block text");
  });
});
