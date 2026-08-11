import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkTab from "ember-uikit/components/uk-tab";

module("Integration | Component | uk tab", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkTab as |tab|>
          <tab.item>Item 1</tab.item>
          <tab.item @href="/">Item 2</tab.item>
        </UkTab>
      </template>,
    );

    assert.dom("ul.uk-tab").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("can set bottom", async function (assert) {
    await render(<template><UkTab @bottom={{true}} /></template>);

    assert.dom("ul.uk-tab").hasClass("uk-tab-bottom");
  });

  test("can set left", async function (assert) {
    await render(<template><UkTab @left={{true}} /></template>);

    assert.dom("ul.uk-tab").hasClass("uk-tab-left");
  });

  test("can set right", async function (assert) {
    await render(<template><UkTab @right={{true}} /></template>);

    assert.dom("ul.uk-tab").hasClass("uk-tab-right");
  });
});
