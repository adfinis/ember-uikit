import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk tab", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      <UkTab as |tab|>
        <tab.item>Item 1</tab.item>
        <tab.item @href="/">Item 2</tab.item>
      </UkTab>
    `);

    assert.dom("ul.uk-tab").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("can set bottom", async function (assert) {
    await render(hbs`<UkTab @bottom={{true}} />`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-bottom");
  });

  test("can set left", async function (assert) {
    await render(hbs`<UkTab @left={{true}} />`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-left");
  });

  test("can set right", async function (assert) {
    await render(hbs`<UkTab @right={{true}} />`);

    assert.dom("ul.uk-tab").hasClass("uk-tab-right");
  });
});
