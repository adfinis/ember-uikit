import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk tab/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkTab::Item>Test</UkTab::Item>`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be active", async function (assert) {
    await render(hbs`<UkTab::Item @active={{true}}>Test</UkTab::Item>`);

    assert.dom("li").hasClass("uk-active");
  });

  test("can be disabled", async function (assert) {
    await render(hbs`<UkTab::Item @disabled={{true}}>Test</UkTab::Item>`);

    assert.dom("li").hasClass("uk-disabled");
  });

  test("can be clicked", async function (assert) {
    this.click = () => assert.step("click");

    await render(hbs`<UkTab::Item @onClick={{this.click}}>Test</UkTab::Item>`);

    await click("a");

    assert.verifySteps(["click"]);
  });

  test("can navigate via href", async function (assert) {
    assert.expect(3);

    this.owner.lookup("service:router").transitionTo = (href) => {
      assert.step("navigate");
      assert.strictEqual(href, "/");
    };

    await render(hbs`<UkTab::Item @href="/">Test</UkTab::Item>`);

    await click("a");

    assert.verifySteps(["navigate"]);
  });
});
