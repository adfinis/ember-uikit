import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkSwitcherContent from "ember-uikit/components/uk-switcher/content";

module("Integration | Component | uk switcher/content", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkSwitcherContent as |content|>
          <content.item>Content 1</content.item>
          <content.item>Content 2</content.item>
        </UkSwitcherContent>
      </template>,
    );

    assert.dom("ul").exists();
    assert.dom("li").exists({ count: 2 });
  });
});
