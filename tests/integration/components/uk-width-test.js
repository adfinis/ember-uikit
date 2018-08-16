import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk width", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-width '1-1'}}Test{{/uk-width}}`);

    assert.dom(".uk-width-1-1").exists();
    assert.dom(".uk-width-1-1").hasText("Test");
  });

  test("can set width", async function(assert) {
    await render(hbs`{{uk-width width='1-1'}}`);

    assert.dom(".uk-width-1-1").exists();
  });
});
