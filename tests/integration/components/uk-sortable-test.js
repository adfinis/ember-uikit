import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, triggerEvent } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk sortable", function (hooks) {
  setupRenderingTest(hooks);

  test("renders sortable no options", async function (assert) {
    await render(hbs`{{uk-sortable}}`);

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
    await render(hbs`{{uk-sortable
      group='sncc'
      animationDuration=400
      threshold=0
      clsPlaceholder='parks'
      clsDrag='tubman'
      clsDragState='wells'
      clsBase='scott-king'
      clsNoDrag='angelou'
      clsEmpty='nash'
      clsCustom='bates'
      handle='boynton'
      clsItem='hamer'
    }}`);

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
    this.set("sortStarted", false);
    this.set("sortStopped", false);
    this.set("sortMoved", false);
    this.set("sortAdded", false);
    this.set("sortRemoved", false);

    await render(
      hbs`{{#uk-sortable
        on-start=(action (mut sortStarted) true)
        on-stop=(action (mut sortStopped) true)
        on-moved=(action (mut sortMoved) true)
        on-added=(action (mut sortAdded) true)
        on-removed=(action (mut sortRemoved) true)
      }}
        <div />
      {{/uk-sortable}}`
    );

    assert.dom(".uk-sortable").exists();
    assert.notOk(this.get("sortStarted"));
    assert.notOk(this.get("sortStopped"));
    assert.notOk(this.get("sortMoved"));
    assert.notOk(this.get("sortAdded"));
    assert.notOk(this.get("sortRemoved"));

    await triggerEvent(".uk-sortable", "start");
    await triggerEvent(".uk-sortable", "stop");
    await triggerEvent(".uk-sortable", "moved");
    await triggerEvent(".uk-sortable", "added");
    await triggerEvent(".uk-sortable", "removed");

    assert.ok(this.get("sortStarted"));
    assert.ok(this.get("sortStopped"));
    assert.ok(this.get("sortMoved"));
    assert.ok(this.get("sortAdded"));
    assert.ok(this.get("sortRemoved"));
  });
});
