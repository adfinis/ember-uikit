import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk tab/item", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-tab/item}}Test{{/uk-tab/item}}`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be active", async function(assert) {
    await render(hbs`{{#uk-tab/item active=true}}Test{{/uk-tab/item}}`);

    assert.dom("li").hasClass("uk-active");
  });

  test("can be disabled", async function(assert) {
    await render(hbs`{{#uk-tab/item disabled=true}}Test{{/uk-tab/item}}`);

    assert.dom("li").hasClass("uk-disabled");
  });
});
