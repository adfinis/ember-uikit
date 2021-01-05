import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk tab/link item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`{{#uk-tab/link-item 'index'}}Test{{/uk-tab/link-item}}`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be disabled", async function (assert) {
    await render(
      hbs`{{#uk-tab/link-item 'index' disabled=true}}Test{{/uk-tab/link-item}}`
    );

    assert.dom("li").hasClass("uk-disabled");
  });
});
