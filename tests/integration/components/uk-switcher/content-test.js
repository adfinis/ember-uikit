import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk switcher/content", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      <UkSwitcher::Content as |content|>
        <content.item>Content 1</content.item>
        <content.item>Content 2</content.item>
      </UkSwitcher::Content>
    `);

    assert.dom("ul").exists();
    assert.dom("li").exists({ count: 2 });
  });
});
