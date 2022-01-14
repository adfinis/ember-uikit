import { module, test } from "qunit";

import color, { COLOR_OPTIONS } from "ember-uikit/-private/color";

module("Unit | Private | color", function () {
  test("computes the color", function (assert) {
    const subject = new (class {
      args = { color: COLOR_OPTIONS.PRIMARY };

      @color({ template: "foobar-$value$" }) color;
    })();

    assert.strictEqual(subject.color, "foobar-primary");
  });

  test("ignores invalid colors", function (assert) {
    const subject = new (class {
      args = { color: "invalidcolor" };

      @color color;
    })();

    assert.strictEqual(subject.color, "");
  });
});
