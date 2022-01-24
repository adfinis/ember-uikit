import { render } from "@ember/test-helpers";
import click from "@ember/test-helpers/dom/click";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk subnav/item", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`<UkSubnav::Item>Test</UkSubnav::Item>`);

    assert.dom("li").exists();
    assert.dom("a").exists();
    assert.dom("a").hasText("Test");
  });

  test("can be active", async function (assert) {
    await render(hbs`<UkSubnav::Item @active={{true}}>Test</UkSubnav::Item>`);

    assert.dom("li").hasClass("uk-active");
  });

  test("can be disabled", async function (assert) {
    await render(hbs`<UkSubnav::Item @disabled={{true}}>Test</UkSubnav::Item>`);

    assert.dom("li").hasClass("uk-disabled");
  });

  test("can be clicked", async function (assert) {
    this.click = () => assert.step("click");

    await render(
      hbs`<UkSubnav::Item @onClick={{this.click}}>Test</UkSubnav::Item>`
    );

    await click("a");

    assert.verifySteps(["click"]);
  });

  test("can navigate via href", async function (assert) {
    assert.expect(4);

    this.owner.lookup("service:router").transitionTo = (href) => {
      assert.step("navigate");
      assert.strictEqual(href, "/");
    };

    await render(hbs`<UkSubnav::Item @href="/">Test</UkSubnav::Item>`);

    assert.dom("a").hasAttribute("href", "/");

    await click("a");

    assert.verifySteps(["navigate"]);
  });

  test("yields the active state", async function (assert) {
    assert.expect(2);

    this.owner.lookup("service:router").isActive = () => false;
    await render(
      hbs`<UkSubnav::Item @href="/" as |active|>{{unless active "not "}}active</UkSubnav::Item>`
    );

    assert.dom("a").hasText("not active");

    this.owner.lookup("service:router").isActive = () => true;
    await render(
      hbs`<UkSubnav::Item @href="/" as |active|>{{unless active "not "}}active</UkSubav::Item>`
    );

    assert.dom("a").hasText("active");
  });
});
