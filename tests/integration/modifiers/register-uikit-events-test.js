import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Modifier | register-uikit-events", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    await render(hbs`<div {{register-uikit-events}}></div>`);

    assert.true(true);
  });
});
