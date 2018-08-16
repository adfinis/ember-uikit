import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk switcher/content/item", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(
      hbs`{{#uk-switcher/content/item}}Test{{/uk-switcher/content/item}}`
    );

    assert.dom("li").exists();
    assert.dom("li").hasText("Test");
  });
});
