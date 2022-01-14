import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk-modal/body", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<UkModal::Body/>`);

    assert.dom(".uk-modal-body").hasText("");

    await render(hbs`
      <UkModal::Body>
        template block text
      </UkModal::Body>
    `);

    assert.dom(".uk-modal-body").hasText("template block text");
  });
});
