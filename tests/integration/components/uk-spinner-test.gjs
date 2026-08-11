import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkSpinner from "ember-uikit/components/uk-spinner";

module("Integration | Component | uk spinner", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(<template><UkSpinner /></template>);

    assert.dom("[uk-spinner]").exists();
  });

  test("can set ratio", async function (assert) {
    await render(<template><UkSpinner @ratio={{2}} /></template>);

    assert.dom("[uk-spinner]").hasAttribute("ratio", "2");
  });
});
