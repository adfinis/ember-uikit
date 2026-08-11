import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkCardFooter from "ember-uikit/components/uk-card/footer";

module("Integration | Component | uk card/footer", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkCardFooter>Content</UkCardFooter>
      </template>,
    );

    assert.dom(".uk-card-footer").exists();
  });
});
