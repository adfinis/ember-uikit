import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkWidth from "ember-uikit/components/uk-width";

module("Integration | Component | uk width", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkWidth @width="1-1">Test</UkWidth>
      </template>,
    );

    assert.dom(".uk-width-1-1").exists();
    assert.dom(".uk-width-1-1").hasText("Test");
  });

  test("can set width", async function (assert) {
    await render(<template><UkWidth @width="1-1" /></template>);

    assert.dom(".uk-width-1-1").exists();
  });
});
