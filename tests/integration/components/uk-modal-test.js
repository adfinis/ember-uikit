import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, settled, triggerKeyEvent } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk-modal", function(hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render by default", async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#uk-modal}}
        <h2>Test</h2>
      {{/uk-modal}}
    `);

    await settled();

    assert.dom(".uk-modal.uk-open").doesNotExist();
  });

  test("it renders if visible=true", async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#uk-modal visible=true}}
        <h2>Test</h2>
      {{/uk-modal}}
    `);

    await settled();

    assert.dom(".uk-modal.uk-open").exists();
  });

  test("it triggers the on-hide action", async function(assert) {
    assert.expect(3);

    this.set("hide", assert.step("hide"));

    await render(hbs`
      {{#uk-modal visible=true on-hide=hide}}
        <h2>Test</h2>
      {{/uk-modal}}
    `);

    await settled();

    // close by pressing esc
    await triggerKeyEvent(".uk-modal", "keydown", 27);

    await settled();

    assert.dom(".uk-modal.uk-open").doesNotExist();
    assert.verifySteps(["hide"]);
  });
});
