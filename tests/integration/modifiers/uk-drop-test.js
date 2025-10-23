import { click, render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Modifier | uk-drop", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<button id="trigger" type="button">Click me</button>
<div id="content" {{uk-drop mode="click"}}>
  Content!
</div>`);

    assert.dom("#content").isNotVisible();
    await click("#trigger");
    assert.dom("#content").isVisible();
  });
});
