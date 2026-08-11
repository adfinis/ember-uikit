import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkSubnavItem from "ember-uikit/components/uk-subnav/item";

// The actual logic of this component is tested in the linked-list-item tests
module("Integration | Component | uk subnav/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkSubnavItem>Test</UkSubnavItem>
      </template>,
    );

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });
});
