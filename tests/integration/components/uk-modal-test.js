import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk-modal", function(hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render by default", async function(assert) {
    await render(hbs`
      {{#uk-modal}}
        <h2>Test</h2>
      {{/uk-modal}}
    `);

    assert.dom(".uk-modal").hasText("Test");
  });

  test("it renders if visible=true", async function(assert) {
    await render(hbs`
      {{#uk-modal visible="true"}}
        <h2>Test</h2>
      {{/uk-modal}}
    `);

    assert.dom(".uk-modal").hasText("Test");
  });
});
