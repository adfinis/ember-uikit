import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk list", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      <UkList as |list|>
        <list.item>Foo</list.item>
        <list.item>Bar</list.item>
        <list.item>Baz</list.item>
      </UkList>
    `);

    assert.dom(".uk-list").exists();
    assert.dom("li").exists({ count: 3 });
  });

  test("can set divider", async function (assert) {
    await render(hbs`<UkList @divider={{true}} />`);

    assert.dom(".uk-list").hasClass("uk-list-divider");
  });

  test("can set striped", async function (assert) {
    await render(hbs`<UkList @striped={{true}} />`);

    assert.dom(".uk-list").hasClass("uk-list-striped");
  });

  test("can set bullet", async function (assert) {
    await render(hbs`<UkList @bullet={{true}} />`);

    assert.dom(".uk-list").hasClass("uk-list-bullet");
  });

  test("can set large", async function (assert) {
    await render(hbs`<UkList @large={{true}} />`);

    assert.dom(".uk-list").hasClass("uk-list-large");
  });
});
