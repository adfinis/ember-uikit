import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk badge", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`{{#uk-badge}}Test{{/uk-badge}}`);

    assert.dom("span.uk-badge").exists();
    assert.dom("span.uk-badge").hasText("Test");
  });

  test("can set label", async function (assert) {
    await render(hbs`{{uk-badge label='Test'}}`);

    assert.dom("span.uk-badge").hasText("Test");
  });
});
