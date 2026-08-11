import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkIcon from "ember-uikit/components/uk-icon";

module("Integration | Component | uk icon", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(<template><UkIcon @icon="home" @ratio={{2}} /></template>);

    assert.dom("[uk-icon]").exists();
    assert.dom("[uk-icon]").hasAttribute("icon", "home");
    assert.dom("[uk-icon]").hasAttribute("ratio", "2");
  });
});
