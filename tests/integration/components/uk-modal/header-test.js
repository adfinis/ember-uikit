import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk-modal/footer", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<UkModal::Header/>`);

    assert.dom(".uk-modal-header").hasText("");

    await render(hbs`
      <UkModal::Header>
        template block text
      </UkModal::Header>
    `);

    assert.dom(".uk-modal-header").hasText("template block text");
  });
});
