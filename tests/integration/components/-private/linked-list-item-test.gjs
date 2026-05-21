import { render, click } from "@ember/test-helpers";
import { ensureSafeComponent } from "@embroider/util";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import LinkedListItemComponent from "ember-uikit/components/-private/linked-list-item";
import UkTabItem from "ember-uikit/components/uk-tab/item";

module(
  "Integration | Component | Private | linked list item",
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
      this.LinkedListItem = ensureSafeComponent(LinkedListItemComponent, this);
    });

    test("renders", async function (assert) {
      await render(
        <template>
          <this.LinkedListItem>Test</this.LinkedListItem>
        </template>,
      );

      assert.dom("li").exists();
      assert.dom("a").exists();
      assert.dom("a").hasText("Test");
    });

    test("can be active", async function (assert) {
      await render(
        <template>
          <this.LinkedListItem @active={{true}}>Test</this.LinkedListItem>
        </template>,
      );

      assert.dom("li").hasClass("uk-active");
    });

    test("can be disabled", async function (assert) {
      await render(
        <template>
          <UkTabItem @disabled={{true}}>Test</UkTabItem>
        </template>,
      );

      assert.dom("li").hasClass("uk-disabled");
    });

    test("can be clicked", async function (assert) {
      this.click = () => assert.step("click");

      await render(
        <template>
          <this.LinkedListItem
            @onClick={{this.click}}
          >Test</this.LinkedListItem>
        </template>,
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
        <template>
          <this.LinkedListItem @href="/">Test</this.LinkedListItem>
        </template>,
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
        <template>
          <this.LinkedListItem @href="/foo/1?test=1">Test</this.LinkedListItem>
        </template>,
      );

      assert.dom("a").hasAttribute("href", "/foo/1?test=1");
    });

    test("yields the active state", async function (assert) {
      this.owner.lookup("service:router").isActive = () => false;

      await render(
        <template>
          <this.LinkedListItem @href="/" as |active|>{{unless active "not"}}
            active</this.LinkedListItem>
        </template>,
      );

      assert.dom("a").hasText("not active");

      this.owner.lookup("service:router").isActive = () => true;

      await render(
        <template>
          <this.LinkedListItem @href="/" as |active|>
            {{unless active "not"}}
            active
          </this.LinkedListItem>
        </template>,
      );

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

      await render(
        <template>
          <this.LinkedListItem
            @href="/foo"
            @linkToIndex={{this.linkToIndex}}
          >Test</this.LinkedListItem>
        </template>,
      );

      this.set("linkToIndex", true);
    });

    test("uses currentWhen for active state if passed", async function (assert) {
      this.owner.lookup("service:router").isActive = (routeName) => {
        assert.strictEqual(routeName, "foo.bar");
        return true;
      };

      this.owner.lookup("service:router").recognize = (url) => ({
        name: url.replace(/^\//, "").replace(/\//g, "."),
        paramNames: [],
        queryParams: {},
      });

      await render(
        <template>
          <this.LinkedListItem
            @href="/"
            @currentWhen="/foo/bar"
            as |active|
          >{{unless active "not"}}
            active</this.LinkedListItem>
        </template>,
      );

      assert.dom("a").hasText("active");
    });
  },
);
