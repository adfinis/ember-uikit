import EmberObject from "@ember/object";
import SizeMixin, { SIZE_OPTIONS } from "ember-uikit/mixins/size";
import { module, test } from "qunit";

module("Unit | Mixin | size", function () {
  test("computes the size", function (assert) {
    const SizeObject = EmberObject.extend(SizeMixin);

    const subject = SizeObject.create({
      sizeTemplate: "foobar-$size$",
    });

    subject.set("size", SIZE_OPTIONS.LARGE);

    assert.equal(subject.get("sizeClass"), "foobar-large");
  });

  test("ignores invalid sizes", function (assert) {
    const SizeObject = EmberObject.extend(SizeMixin);

    const subject = SizeObject.create();

    subject.set("size", "invalidsize");

    assert.notOk(subject.get("sizeClass"));
  });
});
