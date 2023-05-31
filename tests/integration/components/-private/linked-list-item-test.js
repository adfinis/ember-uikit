import { render, click } from "@ember/test-helpers";
import { ensureSafeComponent } from "@embroider/util";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import LinkedListItemComponent from "ember-uikit/components/-private/linked-list-item";

module(
  "Integration | Component | Private | linked list item",
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
      this.LinkedListItem = ensureSafeComponent(LinkedListItemComponent, this);
    });

    test("renders", async function (assert) {
      await render(hbs`<this.LinkedListItem>Test</this.LinkedListItem>`);

      assert.dom("li").exists();
      assert.dom("a").exists();
      assert.dom("a").hasText("Test");
    });

    test("can be active", async function (assert) {
      await render(
        hbs`<this.LinkedListItem @active={{true}}>Test</this.LinkedListItem>`,
      );

      assert.dom("li").hasClass("uk-active");
    });

    test("can be disabled", async function (assert) {
      await render(hbs`<UkTab::Item @disabled={{true}}>Test</UkTab::Item>`);

      assert.dom("li").hasClass("uk-disabled");
    });

    test("can be clicked", async function (assert) {
      this.click = () => assert.step("click");

      await render(
        hbs`<this.LinkedListItem @onClick={{this.click}}>Test</this.LinkedListItem>`,
      );

      await click("a");

      assert.verifySteps(["click"]);
    });

    test("can navigate via href", async function (assert) {
      this.owner.lookup("service:router").transitionTo = (routeName) => {
        assert.step("navigate");
        assert.strictEqual(routeName, "index");
      };

      await render(
        hbs`<this.LinkedListItem @href="/">Test</this.LinkedListItem>`,
      );

      assert.dom("a").hasAttribute("href", "/");

      await click("a");

      assert.verifySteps(["navigate"]);
    });

    test("can handle parameters", async function (assert) {
      this.owner.lookup("service:router").isActive = () => false;
      this.owner.lookup("service:router").recognize = () => ({
        name: "foo",
        paramNames: ["id"],
        params: { id: 1 },
        queryParams: { test: 1 },
      });

      await render(
        hbs`<this.LinkedListItem @href="/foo/1?test=1">Test</this.LinkedListItem>`,
      );

      assert.dom("a").hasAttribute("href", "/foo/1?test=1");
    });

    test("yields the active state", async function (assert) {
      this.owner.lookup("service:router").isActive = () => false;

      await render(hbs`<this.LinkedListItem @href="/" as |active|>{{unless active "not"}}
  active</this.LinkedListItem>`);

      assert.dom("a").hasText("not active");

      this.owner.lookup("service:router").isActive = () => true;

      await render(hbs`<this.LinkedListItem @href="/" as |active|>
  {{unless active "not"}}
  active
</this.LinkedListItem>`);

      assert.dom("a").hasText("active");
    });

    test("respects linkToIndex", async function (assert) {
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

      await render(hbs`<this.LinkedListItem
  @href="/foo"
  @linkToIndex={{this.linkToIndex}}
>Test</this.LinkedListItem>`);

      this.set("linkToIndex", true);
    });
  },
);
