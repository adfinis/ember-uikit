import EmberObject from "@ember/object";
import ColorMixin, { COLOR_OPTIONS } from "ember-uikit/mixins/color";
import { module, test } from "qunit";

module("Unit | Mixin | color", function () {
  test("computes the color", function (assert) {
    const ColorObject = EmberObject.extend(ColorMixin);

    const subject = ColorObject.create({
      colorTemplate: "foobar-$color$",
    });

    subject.set("color", COLOR_OPTIONS.PRIMARY);

    assert.equal(subject.get("colorClass"), "foobar-primary");
  });

  test("ignores invalid colors", function (assert) {
    const ColorObject = EmberObject.extend(ColorMixin);

    const subject = ColorObject.create();

    subject.set("color", "invalidcolor");

    assert.notOk(subject.get("colorClass"));
  });
});
