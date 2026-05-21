import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkCardHeader from "ember-uikit/components/uk-card/header";

module("Integration | Component | uk card/header", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkCardHeader>Content</UkCardHeader>
      </template>,
    );

    assert.dom(".uk-card-header").exists();
  });
});
