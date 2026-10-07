import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkLabel from "ember-uikit/components/uk-label";

module("Integration | Component | uk label", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkLabel>Test</UkLabel>
      </template>,
    );

    assert.dom("span.uk-label").exists();
    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set label", async function (assert) {
    await render(<template><UkLabel @label="Test" /></template>);

    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set color", async function (assert) {
    await render(
      <template><UkLabel @color="danger" @label="Test" /></template>,
    );

    assert.dom("span.uk-label").hasClass("uk-label-danger");
  });
});
