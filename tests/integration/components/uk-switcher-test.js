import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk switcher", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      <UkSwitcher as |switcher|>
        <switcher.nav @type="subnav" as |nav|>
          <nav.component as |subnav|>
            <subnav.item>Item 1</subnav.item>
            <subnav.item>Item 2</subnav.item>
          </nav.component>
        </switcher.nav>

        <switcher.content as |content|>
          <content.item>Content 1</content.item>
          <content.item>Content 2</content.item>
        </switcher.content>
      </UkSwitcher>
    `);

    assert.dom("ul.uk-subnav").exists();
    assert.dom("li").exists({ count: 4 });
    assert.dom("a").exists({ count: 2 });
  });

  test("throws an error with invalid types", async function (assert) {
    this.type = "tab";

    await render(hbs`
      <UkSwitcher as |switcher|>
        <switcher.nav @type={{this.type}} as |nav| >
          <nav.component />
        </switcher.nav>
      </UkSwitcher>
    `);

    assert.throws(() => {
      this.set("type", "foo");
    }, /The @type argument can of the `UkSwitcher` component be "tab" or "subnav", "foo" was passed/);
  });
});
