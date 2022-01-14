import { module, test } from "qunit";

import size, { SIZE_OPTIONS } from "ember-uikit/-private/size";

module("Unit | Private | size", function () {
  test("computes the size", function (assert) {
    const subject = new (class {
      args = { size: SIZE_OPTIONS.LARGE };

      @size({ template: "foobar-$value$" }) size;
    })();

    assert.strictEqual(subject.size, "foobar-large");
  });

  test("ignores invalid sizes", function (assert) {
    const subject = new (class {
      args = { size: "invalidsize" };

      @size size;
    })();

    assert.strictEqual(subject.size, "");
  });
});
