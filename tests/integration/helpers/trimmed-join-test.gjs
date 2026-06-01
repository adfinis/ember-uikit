import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import trimmedJoin from "ember-uikit/helpers/trimmed-join";

module("Integration | Helper | trimmed-join", function (hooks) {
  setupRenderingTest(hooks);

  test("it a trimmed and joined string", async function (assert) {
    this.separator = null;

    await render(
      <template>
        {{trimmedJoin undefined "test1 " null " test2 " "" "test3"}}
      </template>,
    );

    assert.dom(this.element).hasText("test1 test2 test3");
  });

  test("it can use a custom separator", async function (assert) {
    this.separator = null;

    await render(
      <template>{{trimmedJoin "test1 " " test2 " separator=","}}</template>,
    );

    assert.dom(this.element).hasText("test1,test2");
  });
});
