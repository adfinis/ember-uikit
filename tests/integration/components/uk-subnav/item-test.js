import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk subnav/item", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-subnav/item}}Test{{/uk-subnav/item}}`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be active", async function(assert) {
    await render(hbs`{{#uk-subnav/item active=true}}Test{{/uk-subnav/item}}`);

    assert.dom("li").hasClass("uk-active");
  });

  test("can be disabled", async function(assert) {
    await render(hbs`{{#uk-subnav/item disabled=true}}Test{{/uk-subnav/item}}`);

    assert.dom("li").hasClass("uk-disabled");
  });
});
