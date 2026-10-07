import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkListItem from "ember-uikit/components/uk-list/item";

module("Integration | Component | uk list/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(<template><UkListItem /></template>);

    assert.dom("li").exists();
  });
});
