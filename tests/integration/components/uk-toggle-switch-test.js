import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk-toggle-switch", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkToggleSwitch />`);

    assert.dom(".uk-toggle-switch").exists();
    assert.dom("input[type=checkbox]").exists();
  });

  test("can set value", async function (assert) {
    await render(hbs`<UkToggleSwitch @value={{true}} />`);

    assert.dom("input[type=checkbox]").isChecked();
  });

  test("can set color", async function (assert) {
    await render(hbs`<UkToggleSwitch @color="onoff" />`);

    assert.dom(".uk-toggle-switch").hasClass("uk-toggle-switch-onoff");
  });

  test("can set size", async function (assert) {
    await render(hbs`<UkToggleSwitch @size="small" />`);

    assert.dom(".x-toggle-btn").hasClass("small");
  });

  test("can set disabled", async function (assert) {
    await render(hbs`<UkToggleSwitch @disabled={{true}} />`);

    assert.dom("input[type=checkbox]").isDisabled();
  });

  test("can set labels", async function (assert) {
    await render(
      hbs`<UkToggleSwitch @onLabel="On" @offLabel="Off" @showLabels={{true}} />`,
    );

    assert.dom("label.on-label").hasText("On");
    assert.dom("label.off-label").hasText("Off");
  });

  test("can set name", async function (assert) {
    await render(hbs`<UkToggleSwitch @name="test" />`);

    assert.dom("input[type=checkbox]").hasAttribute("name", "test");
  });

  test("can toggle one way", async function (assert) {
    this.value = true;
    this.toggle = (value) => {
      this.value = value;
      assert.step("toggle");
    };

    await render(
      hbs`<UkToggleSwitch @value={{this.value}} @onToggle={{this.toggle}} />`,
    );

    await click("input[type=checkbox]");

    assert.false(this.value);
    assert.verifySteps(["toggle"]);
  });
});
