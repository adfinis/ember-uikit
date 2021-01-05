import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk card/title", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`{{#uk-card/title}}Content{{/uk-card/title}}`);

    assert.dom("h1.uk-card-title").exists();
  });
});
