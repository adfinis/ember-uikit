import { render, focus } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import ukTooltip from "ember-uikit/modifiers/uk-tooltip";

module("Integration | Modifier | uk-tooltip", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(
      <template>
        <div
          id="trigger"
          {{ukTooltip "mytext" cls="my-active-class"}}
        >Test</div>
      </template>,
    );

    assert.dom(".uk-tooltip").doesNotExist();
    await focus("#trigger");
    assert.dom(".uk-tooltip").exists();
    assert.dom(".uk-tooltip").hasClass("my-active-class");
  });
});
