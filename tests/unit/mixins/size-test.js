import EmberObject from "@ember/object";
import { module, test } from "qunit";
import SizeMixin, { SIZE_OPTIONS } from "ember-uikit/mixins/size";

module("Unit | Mixin | size", function () {
  test("computes the size", function (assert) {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create({
      sizeTemplate: "foobar-$size$",
    });

    subject.set("size", SIZE_OPTIONS.LARGE);

    assert.equal(subject.get("sizeClass"), "foobar-large");
  });

  test("ignores invalid sizes", function (assert) {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create();

    subject.set("size", "invalidsize");

    assert.notOk(subject.get("sizeClass"));
  });
});
