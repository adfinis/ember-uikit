import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import registerUikitEvents from "ember-uikit/modifiers/register-uikit-events";

module("Integration | Modifier | register-uikit-events", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    await render(
      <template>
        <div {{registerUikitEvents}}></div>
      </template>,
    );

    assert.true(true);
  });
});
