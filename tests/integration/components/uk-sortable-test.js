import { render, triggerEvent } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk sortable", function (hooks) {
  setupRenderingTest(hooks);

  test("renders sortable no options", async function (assert) {
    await render(hbs`<UkSortable />`);

    assert.dom(".uk-sortable").exists();
    assert.dom(".uk-sortable").doesNotHaveAttribute("group");
    assert.dom(".uk-sortable").doesNotHaveAttribute("animation");
    assert.dom(".uk-sortable").doesNotHaveAttribute("threshold");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-item");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-placeholder");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-drag");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-drag-state");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-base");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-no-drag");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-empty");
    assert.dom(".uk-sortable").doesNotHaveAttribute("cls-custom");
    assert.dom(".uk-sortable").doesNotHaveAttribute("handle");
  });

  test("sets sortable options", async function (assert) {
    await render(hbs`<UkSortable
      @group="sncc"
      @animationDuration={{400}}
      @threshold={{0}}
      @clsPlaceholder="parks"
      @clsDrag="tubman"
      @clsDragState="wells"
      @clsBase="scott-king"
      @clsNoDrag="angelou"
      @clsEmpty="nash"
      @clsCustom="bates"
      @handle="boynton"
      @clsItem="hamer"
    />`);

    assert.dom(".uk-sortable").hasAttribute("group", "sncc");
    assert.dom(".uk-sortable").hasAttribute("animation", "400");
    assert.dom(".uk-sortable").hasAttribute("threshold", "0");
    assert.dom(".uk-sortable").hasAttribute("cls-item", "hamer");
    assert.dom(".uk-sortable").hasAttribute("cls-placeholder", "parks");
    assert.dom(".uk-sortable").hasAttribute("cls-drag", "tubman");
    assert.dom(".uk-sortable").hasAttribute("cls-drag-state", "wells");
    assert.dom(".uk-sortable").hasAttribute("cls-base", "scott-king");
    assert.dom(".uk-sortable").hasAttribute("cls-no-drag", "angelou");
    assert.dom(".uk-sortable").hasAttribute("cls-empty", "nash");
    assert.dom(".uk-sortable").hasAttribute("cls-custom", "bates");
    assert.dom(".uk-sortable").hasAttribute("handle", "boynton");
  });

  test("has sortable events", async function (assert) {
    assert.expect(11);

    this.sortStarted = false;
    this.sortStopped = false;
    this.sortMoved = false;
    this.sortAdded = false;
    this.sortRemoved = false;

    await render(hbs`<UkSortable
      @onStart={{fn (mut this.sortStarted) true}}
      @onStop={{fn (mut this.sortStopped) true}}
      @onMoved={{fn (mut this.sortMoved) true}}
      @onAdded={{fn (mut this.sortAdded) true}}
      @onRemoved={{fn (mut this.sortRemoved) true}}
    />`);

    assert.dom(".uk-sortable").exists();
    assert.false(this.sortStarted);
    assert.false(this.sortStopped);
    assert.false(this.sortMoved);
    assert.false(this.sortAdded);
    assert.false(this.sortRemoved);

    await triggerEvent(".uk-sortable", "start");
    await triggerEvent(".uk-sortable", "stop");
    await triggerEvent(".uk-sortable", "moved");
    await triggerEvent(".uk-sortable", "added");
    await triggerEvent(".uk-sortable", "removed");

    assert.true(this.sortStarted);
    assert.true(this.sortStopped);
    assert.true(this.sortMoved);
    assert.true(this.sortAdded);
    assert.true(this.sortRemoved);
  });
});
