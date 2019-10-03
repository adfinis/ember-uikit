import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk-toggle-switch", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{uk-toggle-switch}}`);

    assert.dom(".uk-toggle-switch").exists();
    assert.dom("input[type=checkbox]").exists();
  });

  test("can set value", async function(assert) {
    await render(hbs`{{uk-toggle-switch value=true}}`);

    assert.dom("input[type=checkbox]").isChecked();
  });

  test("can set color", async function(assert) {
    await render(hbs`{{uk-toggle-switch color='onoff'}}`);

    assert.dom(".uk-toggle-switch").hasClass("uk-toggle-switch-onoff");
  });

  test("can set size", async function(assert) {
    await render(hbs`{{uk-toggle-switch size='small'}}`);

    assert.dom(".x-toggle-btn").hasClass("small");
  });

  test("can set disabled", async function(assert) {
    await render(hbs`{{uk-toggle-switch disabled=true}}`);

    assert.dom("input[type=checkbox]").isDisabled();
  });

  test("can set labels", async function(assert) {
    await render(
      hbs`{{uk-toggle-switch onLabel='On' offLabel='Off' showLabels=true}}`
    );

    assert.dom("label.on-label").hasText("On");
    assert.dom("label.off-label").hasText("Off");
  });

  test("can set name", async function(assert) {
    await render(hbs`{{uk-toggle-switch name='test'}}`);

    assert.dom("input[type=checkbox]").hasAttribute("name", "test");
  });

  test("can toggle two way", async function(assert) {
    this.set("value", true);

    await render(hbs`{{uk-toggle-switch value=value}}`);

    await click("input[type=checkbox]");

    assert.notOk(this.value);
  });

  test("can toggle one way", async function(assert) {
    this.set("value", true);
    this.set("toggle", value => {
      this.set("value", value);
      assert.step("toggle");
    });

    await render(
      hbs`{{uk-toggle-switch value=value on-toggle=(action toggle)}}`
    );

    await click("input[type=checkbox]");

    assert.notOk(this.value);
    assert.verifySteps(["toggle"]);
  });
});
