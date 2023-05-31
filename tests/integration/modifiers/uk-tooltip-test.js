import { render, focus } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Modifier | uk-tooltip", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(
      hbs`<div id="trigger" {{uk-tooltip "mytext" cls="my-active-class"}}>Test</div>`,
    );

    assert.dom(".uk-tooltip").doesNotExist();
    await focus("#trigger");
    assert.dom(".uk-tooltip").exists();
    assert.dom(".uk-tooltip").hasClass("my-active-class");
  });
});
