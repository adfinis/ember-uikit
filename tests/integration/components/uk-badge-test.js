import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk badge", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkBadge>Test</UkBadge>`);

    assert.dom("span.uk-badge").exists();
    assert.dom("span.uk-badge").hasText("Test");
  });

  test("can set label", async function (assert) {
    await render(hbs`<UkBadge @label="Test" />`);

    assert.dom("span.uk-badge").hasText("Test");
  });
});
