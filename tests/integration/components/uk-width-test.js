import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk width", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkWidth @width="1-1">Test</UkWidth>`);

    assert.dom(".uk-width-1-1").exists();
    assert.dom(".uk-width-1-1").hasText("Test");
  });

  test("can set width", async function (assert) {
    await render(hbs`<UkWidth @width="1-1" />`);

    assert.dom(".uk-width-1-1").exists();
  });
});
