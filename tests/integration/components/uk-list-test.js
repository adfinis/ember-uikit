import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk list", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      {{#uk-list as |list|}}
        {{#list.item}}Foo{{/list.item}}
        {{#list.item}}Bar{{/list.item}}
        {{#list.item}}Baz{{/list.item}}
      {{/uk-list}}
    `);

    assert.dom(".uk-list").exists();
    assert.dom("li").exists({ count: 3 });
  });

  test("can set divider", async function (assert) {
    await render(hbs`{{uk-list divider=true}}`);

    assert.dom(".uk-list").hasClass("uk-list-divider");
  });

  test("can set striped", async function (assert) {
    await render(hbs`{{uk-list striped=true}}`);

    assert.dom(".uk-list").hasClass("uk-list-striped");
  });

  test("can set bullet", async function (assert) {
    await render(hbs`{{uk-list bullet=true}}`);

    assert.dom(".uk-list").hasClass("uk-list-bullet");
  });

  test("can set large", async function (assert) {
    await render(hbs`{{uk-list large=true}}`);

    assert.dom(".uk-list").hasClass("uk-list-large");
  });
});
