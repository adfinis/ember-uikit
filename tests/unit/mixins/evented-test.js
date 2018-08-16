import EmberObject from "@ember/object";
import EventedMixin from "ember-uikit/mixins/evented";
import { module, test } from "qunit";

module("Unit | Mixin | evented", function() {
  // Replace this with your real tests.
  test("it works", function(assert) {
    let EventedObject = EmberObject.extend(EventedMixin);
    let subject = EventedObject.create();
    assert.ok(subject);
  });
});
