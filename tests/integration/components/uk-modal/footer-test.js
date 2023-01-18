import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk-modal/header", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<UkModal::Footer />`);

    assert.dom(".uk-modal-footer").hasText("");

    await render(hbs`<UkModal::Footer>
  template block text
</UkModal::Footer>`);

    assert.dom(".uk-modal-footer").hasText("template block text");
  });
});
