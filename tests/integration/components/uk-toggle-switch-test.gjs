import { render, click } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkToggleSwitch from "ember-uikit/components/uk-toggle-switch";

module("Integration | Component | uk-toggle-switch", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(<template><UkToggleSwitch /></template>);

    assert.dom(".uk-toggle-switch").exists();
    assert.dom("input[type=checkbox]").exists();
  });

  test("can set value", async function (assert) {
    await render(<template><UkToggleSwitch @value={{true}} /></template>);

    assert.dom("input[type=checkbox]").isChecked();
  });

  test("can set color", async function (assert) {
    await render(<template><UkToggleSwitch @color="onoff" /></template>);

    assert.dom(".uk-toggle-switch").hasClass("uk-toggle-switch-onoff");
  });

  test("can set size", async function (assert) {
    await render(<template><UkToggleSwitch @size="small" /></template>);

    assert.dom(".x-toggle-btn").hasClass("small");
  });

  test("can set disabled", async function (assert) {
    await render(<template><UkToggleSwitch @disabled={{true}} /></template>);

    assert.dom("input[type=checkbox]").isDisabled();
  });

  test("can set labels", async function (assert) {
    await render(
      <template>
        <UkToggleSwitch @onLabel="On" @offLabel="Off" @showLabels={{true}} />
      </template>,
    );

    assert.dom("label.on-label").hasText("On");
    assert.dom("label.off-label").hasText("Off");
  });

  test("can set name", async function (assert) {
    await render(<template><UkToggleSwitch @name="test" /></template>);

    assert.dom("input[type=checkbox]").hasAttribute("name", "test");
  });

  test("can toggle one way", async function (assert) {
    this.value = true;
    this.toggle = (value) => {
      this.value = value;
      assert.step("toggle");
    };

    await render(
      <template>
        <UkToggleSwitch @value={{this.value}} @onToggle={{this.toggle}} />
      </template>,
    );

    await click("input[type=checkbox]");

    assert.false(this.value);
    assert.verifySteps(["toggle"]);
  });
});
