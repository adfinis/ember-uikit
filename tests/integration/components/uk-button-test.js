import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk button", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-button}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set label", async function(assert) {
    await render(hbs`{{uk-button label='Click me!'}}`);

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set disabled", async function(assert) {
    await render(hbs`{{#uk-button disabled=true}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button").isDisabled();
  });

  test("can set active", async function(assert) {
    await render(hbs`{{#uk-button active=true}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button").hasClass("uk-active");
  });

  test("can set loading", async function(assert) {
    await render(hbs`{{#uk-button loading=true}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button [uk-spinner]").exists();
  });

  test("can set color", async function(assert) {
    await render(hbs`{{#uk-button color='primary'}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button").hasClass("uk-button-primary");
  });

  test("can set size", async function(assert) {
    await render(hbs`{{#uk-button size='large'}}Click me!{{/uk-button}}`);

    assert.dom(".uk-button").hasClass("uk-button-large");
  });

  test("fires on-click action", async function(assert) {
    this.set("didClick", false);

    await render(
      hbs`{{#uk-button on-click=(action (mut didClick) true)}}Click me!{{/uk-button}}`
    );

    assert.notOk(this.get("didClick"));

    await click(".uk-button");

    assert.ok(this.get("didClick"));
  });

  test("can set title", async function(assert) {
    await render(hbs`{{uk-button title='Click me!'}}`);

    assert.dom(".uk-button").hasAttribute("title", "Click me!");
  });
});
