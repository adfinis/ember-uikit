import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkList from "ember-uikit/components/uk-list";

module("Integration | Component | uk list", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkList as |list|>
          <list.item>Foo</list.item>
          <list.item>Bar</list.item>
          <list.item>Baz</list.item>
        </UkList>
      </template>,
    );

    assert.dom(".uk-list").exists();
    assert.dom("li").exists({ count: 3 });
  });

  test("can set divider", async function (assert) {
    await render(<template><UkList @divider={{true}} /></template>);

    assert.dom(".uk-list").hasClass("uk-list-divider");
  });

  test("can set striped", async function (assert) {
    await render(<template><UkList @striped={{true}} /></template>);

    assert.dom(".uk-list").hasClass("uk-list-striped");
  });

  test("can set bullet", async function (assert) {
    await render(<template><UkList @bullet={{true}} /></template>);

    assert.dom(".uk-list").hasClass("uk-list-bullet");
  });

  test("can set large", async function (assert) {
    await render(<template><UkList @large={{true}} /></template>);

    assert.dom(".uk-list").hasClass("uk-list-large");
  });
});
