import { module, test } from "qunit";

import flex, {
  FLEX_HORIZONTAL_OPTIONS,
  FLEX_VERTICAL_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FLEX_WRAP_ALIGNMENT_OPTIONS,
} from "ember-uikit/-private/flex";

module("Unit | Private | flex", function () {
  test("computes flex", function (assert) {
    const subject = new (class {
      args = {
        flexHorizontal: FLEX_HORIZONTAL_OPTIONS.CENTER,
        flexVertical: FLEX_VERTICAL_OPTIONS.MIDDLE,
        flexDirection: FLEX_DIRECTION_OPTIONS.COLUMN_REVERSE,
        flexWrap: FLEX_WRAP_OPTIONS.NOWRAP,
        flexWrapAlignment: FLEX_WRAP_ALIGNMENT_OPTIONS.BETWEEN,
      };

      @flex flex;
    })();

    assert.strictEqual(subject.flexHorizontal, "uk-flex-center");
    assert.strictEqual(subject.flexVertical, "uk-flex-middle");
    assert.strictEqual(subject.flexDirection, "uk-flex-column-reverse");
    assert.strictEqual(subject.flexWrap, "uk-flex-nowrap");
    assert.strictEqual(subject.flexWrapAlignment, "uk-flex-wrap-between");

    assert.strictEqual(
      subject.flex,
      "uk-flex-center uk-flex-middle uk-flex-column-reverse uk-flex-nowrap uk-flex-wrap-between",
    );
  });
});
