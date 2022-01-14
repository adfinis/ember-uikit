import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk icon", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkIcon @icon="home" @ratio={{2}} />`);

    assert.dom("[uk-icon]").exists();
    assert.dom("[uk-icon]").hasAttribute("icon", "home");
    assert.dom("[uk-icon]").hasAttribute("ratio", "2");
  });
});
