import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk button", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkButton>Click me!</UkButton>`);

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set label", async function (assert) {
    await render(hbs`<UkButton @label="Click me!" />`);

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set disabled", async function (assert) {
    await render(hbs`<UkButton @disabled={{true}}>Click me!</UkButton>`);

    assert.dom(".uk-button").isDisabled();
  });

  test("can set active", async function (assert) {
    await render(hbs`<UkButton @active={{true}}>Click me!</UkButton>`);

    assert.dom(".uk-button").hasClass("uk-active");
  });

  test("can set loading", async function (assert) {
    await render(hbs`<UkButton @loading={{true}}>Click me!</UkButton>`);

    assert.dom(".uk-button [uk-spinner]").exists();
  });

  test("can set color", async function (assert) {
    await render(hbs`<UkButton @color="primary">Click me!</UkButton>`);

    assert.dom(".uk-button").hasClass("uk-button-primary");
  });

  test("can set size", async function (assert) {
    await render(hbs`<UkButton @size="large">Click me!</UkButton>`);

    assert.dom(".uk-button").hasClass("uk-button-large");
  });

  test("fires onClick action", async function (assert) {
    this.set("didClick", false);

    await render(
      hbs`<UkButton @onClick={{fn (mut this.didClick) true}}>Click me!</UkButton>`
    );

    assert.false(this.didClick);

    await click(".uk-button");

    assert.true(this.didClick);
  });

  test("can set title", async function (assert) {
    await render(hbs`<UkButton @title="Click me!" />`);

    assert.dom(".uk-button").hasAttribute("title", "Click me!");
  });
});
