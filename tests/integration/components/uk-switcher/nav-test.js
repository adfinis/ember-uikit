import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk switcher/nav", function (hooks) {
  setupRenderingTest(hooks);

  test("renders with subnav", async function (assert) {
    await render(hbs`
      <UkSwitcher::Nav @type="subnav" as |nav|>
        <nav.component as |subnav|>
          <subnav.item>Item 1</subnav.item>
          <subnav.item>Item 2</subnav.item>
        </nav.component>
      </UkSwitcher::Nav>
    `);

    assert.dom("ul.uk-subnav").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("renders with tab", async function (assert) {
    await render(hbs`
      <UkSwitcher::Nav @type="tab" as |nav|>
        <nav.component as |tab|>
          <tab.item>Item 1</tab.item>
          <tab.item>Item 2</tab.item>
        </nav.component>
      </UkSwitcher::Nav>
    `);

    assert.dom("ul.uk-tab").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });
});
