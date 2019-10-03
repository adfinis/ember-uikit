import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk spinner", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{uk-spinner}}`);

    assert.dom("[uk-spinner]").exists();
  });

  test("can set ratio", async function(assert) {
    await render(hbs`{{uk-spinner ratio=2}}`);

    assert.dom("[uk-spinner]").hasAttribute("ratio", "2");
  });
});
