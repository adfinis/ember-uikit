import { render, triggerEvent, settled } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk-modal", function (hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render by default", async function (assert) {
    assert.expect(1);

    await render(hbs`<UkModal as |modal|>
  <modal.header>
    <h2>Test</h2>
  </modal.header>
</UkModal>`);

    assert.dom(".uk-modal.uk-open").doesNotExist();
  });

  test("it observes the visible property", async function (assert) {
    assert.expect(2);

    this.visible = false;

    await render(hbs`<UkModal @visible={{this.visible}} as |modal|>
  <modal.header>
    <h2>Test</h2>
  </modal.header>
  <modal.body>
    <p>Lorem ipsum</p>
  </modal.body>
  <modal.footer class="uk-text-right">
    <button type="button"></button>
  </modal.footer>
</UkModal>`);

    assert.dom(".uk-modal.uk-open").doesNotExist();

    this.set("visible", true);
    await settled();

    assert.dom(".uk-modal.uk-open").exists();
  });

  test("it triggers the onHide action", async function (assert) {
    assert.expect(2);

    this.hide = () => assert.step("hide");

    await render(hbs`<UkModal @visible={{true}} @onHide={{this.hide}} as |modal|>
  <modal.header>
    <h2>Test</h2>
  </modal.header>
</UkModal>`);

    await triggerEvent(".uk-modal", "hide");
    // eslint-disable-next-line ember/no-settled-after-test-helper
    await settled();

    assert.verifySteps(["hide"]);
  });

  test("it triggers the onShow action", async function (assert) {
    assert.expect(2);

    this.show = () => assert.step("show");
    this.visible = false;

    await render(hbs`<UkModal @visible={{this.visible}} @onShow={{this.show}} as |modal|>
  <modal.header>
    <h2>Test</h2>
  </modal.header>
</UkModal>`);

    await triggerEvent(".uk-modal", "show");
    // eslint-disable-next-line ember/no-settled-after-test-helper
    await settled();

    assert.verifySteps(["show"]);
  });

  test("it ignores bubbling events", async function (assert) {
    assert.expect(1);

    this.hide = () => assert.step("hide");

    await render(hbs`<UkModal @visible={{true}} @onHide={{this.hide}} as |modal|>
  <modal.body>
    <button data-test-target type="button">Target</button>
  </modal.body>
</UkModal>`);

    await triggerEvent("[data-test-target]", "hide");
    // eslint-disable-next-line ember/no-settled-after-test-helper
    await settled();

    assert.verifySteps([]);
  });

  test("it renders in container", async function (assert) {
    assert.expect(1);

    await render(hbs`<div id="modal-container"></div>
<UkModal @visible={{true}} @container="#modal-container" as |modal|>
  <modal.body>
    <button data-test-target type="button">Target</button>
  </modal.body>
</UkModal>`);

    assert.dom("#modal-container div.uk-modal.uk-open").exists();
  });
});
