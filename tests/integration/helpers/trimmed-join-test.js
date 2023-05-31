import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Helper | trimmed-join", function (hooks) {
  setupRenderingTest(hooks);

  test("it a trimmed and joined string", async function (assert) {
    this.separator = null;

    await render(
      hbs`{{trimmed-join undefined "test1 " null " test2 " "" "test3"}}`,
    );

    assert.dom(this.element).hasText("test1 test2 test3");
  });

  test("it can use a custom separator", async function (assert) {
    this.separator = null;

    await render(hbs`{{trimmed-join "test1 " " test2 " separator=","}}`);

    assert.dom(this.element).hasText("test1,test2");
  });
});
