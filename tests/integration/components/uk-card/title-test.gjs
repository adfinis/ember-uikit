import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkCardTitle from "ember-uikit/components/uk-card/title";

module("Integration | Component | uk card/title", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkCardTitle>Content</UkCardTitle>
      </template>,
    );

    assert.dom("h1.uk-card-title").exists();
  });
});
