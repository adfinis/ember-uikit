import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk subnav/link item", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(
      hbs`{{#uk-subnav/link-item 'index'}}Test{{/uk-subnav/link-item}}`
    );

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be disabled", async function(assert) {
    await render(
      hbs`{{#uk-subnav/link-item 'index' disabled=true}}Test{{/uk-subnav/link-item}}`
    );

    assert.dom("li").hasClass("uk-disabled");
  });
});
