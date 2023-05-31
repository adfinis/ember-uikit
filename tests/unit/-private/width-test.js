import { module, test } from "qunit";

import { MEDIA_OPTIONS } from "ember-uikit/-private/validated";
import width, {
  GRID_OPTIONS,
  FIXED_OPTIONS,
  SPECIAL_OPTIONS,
} from "ember-uikit/-private/width";

module("Unit | Private | width", function () {
  test("computes the width", function (assert) {
    const subject = new (class {
      args = {
        width: `${GRID_OPTIONS["1_OF_1"]} ${GRID_OPTIONS["1_OF_2"]}${MEDIA_OPTIONS.MEDIUM} ${FIXED_OPTIONS.MEDIUM}${MEDIA_OPTIONS.LARGE} ${SPECIAL_OPTIONS.AUTO}${MEDIA_OPTIONS.XLARGE}`,
      };

      @width({ template: "foo-$value$" }) width;
    })();

    assert.strictEqual(
      subject.width,
      "foo-1-1 foo-1-2@m foo-medium@l foo-auto@xl",
    );
  });

  test("ignores invalid width", function (assert) {
    const subject = new (class {
      args = {
        width: "1-8 1-2@x somestring auto@xl",
      };

      @width({ template: "foo-$value$" }) width;
    })();

    assert.strictEqual(subject.width, "foo-auto@xl");
  });
});
