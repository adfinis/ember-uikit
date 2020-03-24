import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk tab", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      {{#uk-tab as |tab|}}
        {{#tab.item}}Item 1{{/tab.item}}
        {{#tab.link-item 'index'}}Item 2{{/tab.link-item}}
      {{/uk-tab}}
    `);

    assert.dom("ul.uk-tab[uk-tab]").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("can set bottom", async function (assert) {
    await render(hbs`{{uk-tab bottom=true}}`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-bottom");
  });

  test("can set left", async function (assert) {
    await render(hbs`{{uk-tab left=true}}`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-left");
  });

  test("can set right", async function (assert) {
    await render(hbs`{{uk-tab right=true}}`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-right");
  });
});
