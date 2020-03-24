import EmberObject from "@ember/object";
import { module, test } from "qunit";
import ColorMixin, { COLOR_OPTIONS } from "ember-uikit/mixins/color";

module("Unit | Mixin | color", function () {
  test("computes the color", function (assert) {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create({
      colorTemplate: "foobar-$color$",
    });

    subject.set("color", COLOR_OPTIONS.PRIMARY);

    assert.equal(subject.get("colorClass"), "foobar-primary");
  });

  test("ignores invalid colors", function (assert) {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create();

    subject.set("color", "invalidcolor");

    assert.notOk(subject.get("colorClass"));
  });
});
