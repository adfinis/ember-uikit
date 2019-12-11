import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import {
  render,
  click,
  waitFor,
  triggerEvent,
  settled
} from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk-modal", function(hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render by default", async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#uk-modal as |modal|}}
        {{#modal.header}}
          <h2>Test</h2>
        {{/modal.header}}
      {{/uk-modal}}
    `);

    assert.dom(".uk-modal.uk-open").doesNotExist();
  });

  test("it renders if visible=true", async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#uk-modal visible=true as |modal|}}
        {{#modal.header}}
          <h2>Test</h2>
        {{/modal.header}}
        {{#modal.body}}
          <p>Lorem ipsum</p>
        {{/modal.body}}
        {{#modal.footer class="uk-text-right"}}
          <button></button>
        {{/modal.footer}}
      {{/uk-modal}}
    `);

    assert.dom(".uk-modal.uk-open").exists();
  });

  test("it triggers the on-hide action", async function(assert) {
    assert.expect(3);

    this.set("hide", () => assert.step("hide"));

    await render(hbs`
      {{#uk-modal visible=true on-hide=this.hide as |modal|}}
        {{#modal.header}}
          <h2>Test</h2>
        {{/modal.header}}
      {{/uk-modal}}
    `);

    // close by pressing close button
    await click(".uk-modal .uk-close");
    await waitFor(".uk-modal[data-test-animating]", { count: 0 });

    assert.dom(".uk-modal.uk-open").doesNotExist();
    assert.verifySteps(["hide"]);
  });

  test("it ignores bubbling events", async function(assert) {
    assert.expect(2);

    this.set("hide", () => assert.step("hide"));

    await render(hbs`
      {{#uk-modal visible=true on-hide=this.hide as |modal|}}
        {{#modal.body}}
          <button data-test-target>Target</button>
        {{/modal.body}}
      {{/uk-modal}}
    `);

    await triggerEvent("[data-test-target]", "hidden");
    await settled();

    assert.dom(".uk-modal.uk-open").exists();
    assert.verifySteps([]);
  });
});
