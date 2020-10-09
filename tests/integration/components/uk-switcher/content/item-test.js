import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, triggerEvent } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk switcher/content/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      hbs`{{#uk-switcher/content/item}}Test{{/uk-switcher/content/item}}`
    );

    assert.dom("li").exists();
    assert.dom("li").hasText("Test");
  });

  test("has switcher content item events", async function (assert) {
    this.set("beforeshow", false);
    this.set("show", false);
    this.set("shown", false);
    this.set("beforehide", false);
    this.set("hide", false);
    this.set("hidden", false);

    await render(
      hbs`{{#uk-switcher/content/item
        on-beforeshow=(action (mut beforeshow) true)
        on-show=(action (mut show) true)
        on-shown=(action (mut shown) true)
        on-beforehide=(action (mut beforehide) true)
        on-hide=(action (mut hide) true)
        on-hidden=(action (mut hidden) true)
      }}
        <div />
      {{/uk-switcher/content/item}}`
    );

    assert.dom("li").exists();
    assert.notOk(this.beforeshow);
    assert.notOk(this.show);
    assert.notOk(this.shown);
    assert.notOk(this.beforehide);
    assert.notOk(this.hide);
    assert.notOk(this.hidden);

    await triggerEvent("li", "beforeshow");
    await triggerEvent("li", "show");
    await triggerEvent("li", "shown");
    await triggerEvent("li", "beforehide");
    await triggerEvent("li", "hide");
    await triggerEvent("li", "hidden");

    assert.ok(this.beforeshow);
    assert.ok(this.show);
    assert.ok(this.shown);
    assert.ok(this.beforehide);
    assert.ok(this.hide);
    assert.ok(this.hidden);
  });
});
