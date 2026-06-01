import { click, render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import ukDrop from "ember-uikit/modifiers/uk-drop";

module("Integration | Modifier | uk-drop", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(
      <template>
        <button id="trigger" type="button">Click me</button>
        <div id="content" {{ukDrop mode="click"}}>
          Content!
        </div>
      </template>,
    );

    assert.dom("#content").isNotVisible();
    await click("#trigger");
    assert.dom("#content").isVisible();
  });
});
