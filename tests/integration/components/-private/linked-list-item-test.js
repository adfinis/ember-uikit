import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import LinkedListItemComponent from "ember-uikit/components/-private/linked-list-item";

module(
  "Integration | Component | Private | linked list item",
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
      /**
       * We explicitly don't expose the private linked list item component since
       * that should not be public API. To use this in tests we need to call it
       * like this:
       *
       * {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
       *   <LinkedListItem>Test</LinkedListItem>
       * {{/let}}
       *
       * We can't just use `<this.item>Test</this.item>` like the embroider
       * guides suggest, since Ember LTS 3.24 doesn't support this.
       */
      this.item = LinkedListItemComponent;
    });

    test("renders", async function (assert) {
      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem>Test</LinkedListItem>
        {{/let}}
      `);

      assert.dom("li").exists();
      assert.dom("a").exists();
      assert.dom("a").hasText("Test");
    });

    test("can be active", async function (assert) {
      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @active={{true}}>Test</LinkedListItem>
        {{/let}}
      `);

      assert.dom("li").hasClass("uk-active");
    });

    test("can be disabled", async function (assert) {
      await render(hbs`<UkTab::Item @disabled={{true}}>Test</UkTab::Item>`);

      assert.dom("li").hasClass("uk-disabled");
    });

    test("can be clicked", async function (assert) {
      this.click = () => assert.step("click");

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @onClick={{this.click}}>Test</LinkedListItem>
        {{/let}}
      `);

      await click("a");

      assert.verifySteps(["click"]);
    });

    test("can navigate via href", async function (assert) {
      assert.expect(4);

      this.owner.lookup("service:router").transitionTo = (routeName) => {
        assert.step("navigate");
        assert.strictEqual(routeName, "index");
      };

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @href="/">Test</LinkedListItem>
        {{/let}}
      `);

      assert.dom("a").hasAttribute("href", "/");

      await click("a");

      assert.verifySteps(["navigate"]);
    });

    test("can handle parameters", async function (assert) {
      assert.expect(1);

      this.owner.lookup("service:router").isActive = () => false;
      this.owner.lookup("service:router").recognize = () => ({
        name: "foo",
        paramNames: ["id"],
        params: { id: 1 },
        queryParams: { test: 1 },
      });

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @href="/foo/1?test=1">Test</LinkedListItem>
        {{/let}}
      `);

      assert.dom("a").hasAttribute("href", "/foo/1?test=1");
    });

    test("yields the active state", async function (assert) {
      assert.expect(2);

      this.owner.lookup("service:router").isActive = () => false;

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @href="/" as |active|>{{unless active "not"}} active</LinkedListItem>
        {{/let}}
      `);

      assert.dom("a").hasText("not active");

      this.owner.lookup("service:router").isActive = () => true;

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @href="/" as |active|>{{unless active "not"}} active</LinkedListItem>
        {{/let}}
      `);

      assert.dom("a").hasText("active");
    });

    test("respects linkToIndex", async function (assert) {
      assert.expect(2);

      this.linkToIndex = false;

      this.owner.lookup("service:router").recognize = () => ({
        name: "foo.index",
        params: {},
        paramNames: [],
        parent: null,
        queryParams: {},
      });

      this.owner.lookup("service:router").isActive = (routeName) => {
        assert.strictEqual(routeName, this.linkToIndex ? "foo.index" : "foo");
      };

      await render(hbs`
        {{#let (component (ensure-safe-component this.item)) as |LinkedListItem|}}
          <LinkedListItem @href="/foo" @linkToIndex={{this.linkToIndex}}>Test</LinkedListItem>
        {{/let}}
      `);

      this.set("linkToIndex", true);
    });
  }
);
