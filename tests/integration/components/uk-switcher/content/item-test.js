import { render, triggerEvent } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk switcher/content/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      hbs`<UkSwitcher::Content::Item>Test</UkSwitcher::Content::Item>`
    );

    assert.dom("li").exists();
    assert.dom("li").hasText("Test");
  });

  test("has switcher content item events", async function (assert) {
    this.beforeShow = false;
    this.show = false;
    this.shown = false;
    this.beforeHide = false;
    this.hide = false;
    this.hidden = false;

    await render(
      hbs`<UkSwitcher::Content::Item
  @onBeforeShow={{fn (mut this.beforeShow) true}}
  @onShow={{fn (mut this.show) true}}
  @onShown={{fn (mut this.shown) true}}
  @onBeforeHide={{fn (mut this.beforeHide) true}}
  @onHide={{fn (mut this.hide) true}}
  @onHidden={{fn (mut this.hidden) true}}
>
  <div />
</UkSwitcher::Content::Item>`
    );

    assert.dom("li").exists();
    assert.false(this.beforeShow);
    assert.false(this.show);
    assert.false(this.shown);
    assert.false(this.beforeHide);
    assert.false(this.hide);
    assert.false(this.hidden);

    await triggerEvent("li", "beforeshow");
    await triggerEvent("li", "show");
    await triggerEvent("li", "shown");
    await triggerEvent("li", "beforehide");
    await triggerEvent("li", "hide");
    await triggerEvent("li", "hidden");

    assert.true(this.beforeShow);
    assert.true(this.show);
    assert.true(this.shown);
    assert.true(this.beforeHide);
    assert.true(this.hide);
    assert.true(this.hidden);
  });
});
