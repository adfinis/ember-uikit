import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkCardBody from "ember-uikit/components/uk-card/body";

module("Integration | Component | uk card/body", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkCardBody>Content</UkCardBody>
      </template>,
    );

    assert.dom(".uk-card-body").exists();
  });
});
