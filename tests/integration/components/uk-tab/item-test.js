import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk tab/item", function (hooks) {
  setupRenderingTest(hooks);

  // The actual logic of this component is tested in the linked-list-item tests
  test("renders", async function (assert) {
    await render(hbs`<UkTab::Item>Test</UkTab::Item>`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });
});
