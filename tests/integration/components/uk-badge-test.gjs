import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkBadge from "ember-uikit/components/uk-badge";

module("Integration | Component | uk badge", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkBadge>Test</UkBadge>
      </template>,
    );

    assert.dom("span.uk-badge").exists();
    assert.dom("span.uk-badge").hasText("Test");
  });

  test("can set label", async function (assert) {
    await render(<template><UkBadge @label="Test" /></template>);

    assert.dom("span.uk-badge").hasText("Test");
  });
});
