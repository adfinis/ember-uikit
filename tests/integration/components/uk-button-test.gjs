import { fn } from "@ember/helper";
import { render, click } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkButton from "ember-uikit/components/uk-button";

module("Integration | Component | uk button", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkButton>Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set label", async function (assert) {
    await render(<template><UkButton @label="Click me!" /></template>);

    assert.dom(".uk-button").hasText("Click me!");
  });

  test("can set disabled", async function (assert) {
    await render(
      <template>
        <UkButton @disabled={{true}}>Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button").isDisabled();
  });

  test("can set active", async function (assert) {
    await render(
      <template>
        <UkButton @active={{true}}>Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button").hasClass("uk-active");
  });

  test("can set loading", async function (assert) {
    await render(
      <template>
        <UkButton @loading={{true}}>Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button [uk-spinner]").exists();
  });

  test("can set color", async function (assert) {
    await render(
      <template>
        <UkButton @color="primary">Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button").hasClass("uk-button-primary");
  });

  test("can set size", async function (assert) {
    await render(
      <template>
        <UkButton @size="large">Click me!</UkButton>
      </template>,
    );

    assert.dom(".uk-button").hasClass("uk-button-large");
  });

  test("fires onClick action", async function (assert) {
    this.set("didClick", false);

    await render(
      <template>
        <UkButton @onClick={{fn (mut this.didClick) true}}>Click me!</UkButton>
      </template>,
    );

    assert.false(this.didClick);

    await click(".uk-button");

    assert.true(this.didClick);
  });

  test("can set title", async function (assert) {
    await render(<template><UkButton @title="Click me!" /></template>);

    assert.dom(".uk-button").hasAttribute("title", "Click me!");
  });
});
