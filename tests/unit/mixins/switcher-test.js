import EmberObject from "@ember/object";
import { module, test } from "qunit";
import SwitcherMixin from "ember-uikit/mixins/switcher";

module("Unit | Mixin | switcher", function() {
  test("computes connect property", function(assert) {
    let SwitcherObject = EmberObject.extend(SwitcherMixin);

    let subject = SwitcherObject.create();

    assert.ok(subject);
    assert.equal(subject.get("connect"), "");

    subject.set("contentId", "test");

    assert.equal(subject.get("connect"), "#test");
  });
});
