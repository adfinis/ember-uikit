import EmberObject from "@ember/object";
import SwitcherMixin from "ember-uikit/mixins/switcher";
import { module, test } from "qunit";

module("Unit | Mixin | switcher", function () {
  test("computes connect property", function (assert) {
    const SwitcherObject = EmberObject.extend(SwitcherMixin);

    const subject = SwitcherObject.create();

    assert.ok(subject);
    assert.equal(subject.get("connect"), "");

    subject.set("contentId", "test");

    assert.equal(subject.get("connect"), "#test");
  });
});
