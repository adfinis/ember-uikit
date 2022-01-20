import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk label", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkLabel>Test</UkLabel>`);

    assert.dom("span.uk-label").exists();
    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set label", async function (assert) {
    await render(hbs`<UkLabel @label="Test" />`);

    assert.dom("span.uk-label").hasText("Test");
  });

  test("can set color", async function (assert) {
    await render(hbs`<UkLabel @color="danger" @label="Test" />`);

    assert.dom("span.uk-label").hasClass("uk-label-danger");
  });
});
