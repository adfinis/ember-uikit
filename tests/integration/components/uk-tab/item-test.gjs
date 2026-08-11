import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkTabItem from "ember-uikit/components/uk-tab/item";

module("Integration | Component | uk tab/item", function (hooks) {
  setupRenderingTest(hooks);

  // The actual logic of this component is tested in the linked-list-item tests
  test("renders", async function (assert) {
    await render(
      <template>
        <UkTabItem>Test</UkTabItem>
      </template>,
    );

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });
});
