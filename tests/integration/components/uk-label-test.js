import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk label", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-label}}Test{{/uk-label}}`);

    assert.dom("span.uk-label").exists();
    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set label", async function(assert) {
    await render(hbs`{{uk-label label='Test'}}`);

    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set color", async function(assert) {
    await render(hbs`{{uk-label color='danger' label='Test'}}`);

    assert.dom("span.uk-label").hasClass("uk-label-danger");
  });
});
