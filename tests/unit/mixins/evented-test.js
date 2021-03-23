import EmberObject from "@ember/object";
import EventedMixin from "ember-uikit/mixins/evented";
import { module, test } from "qunit";

module("Unit | Mixin | evented", function () {
  // Replace this with your real tests.
  test("it works", function (assert) {
    const EventedObject = EmberObject.extend(EventedMixin);
    const subject = EventedObject.create();
    assert.ok(subject);
  });
});
