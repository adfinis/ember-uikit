import EmberObject from "@ember/object";
import { module, test } from "qunit";
import FlexMixin, {
  FLEX_HORIZONTAL_OPTIONS,
  FLEX_VERTICAL_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FLEX_WRAP_ALIGNMENT_OPTIONS
} from "ember-uikit/mixins/flex";

module("Unit | Mixin | flex", function() {
  test("computes flex horizontal", function(assert) {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set("flexHorizontal", FLEX_HORIZONTAL_OPTIONS.CENTER);

    assert.equal(subject.get("flexHorizontalClass"), "uk-flex-center");
  });

  test("computes flex vertical", function(assert) {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set("flexVertical", FLEX_VERTICAL_OPTIONS.MIDDLE);

    assert.equal(subject.get("flexVerticalClass"), "uk-flex-middle");
  });

  test("computes flex direction", function(assert) {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set("flexDirection", FLEX_DIRECTION_OPTIONS.COLUMN_REVERSE);

    assert.equal(subject.get("flexDirectionClass"), "uk-flex-column-reverse");
  });

  test("computes flex wrap", function(assert) {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set("flexWrap", FLEX_WRAP_OPTIONS.NOWRAP);

    assert.equal(subject.get("flexWrapClass"), "uk-flex-nowrap");
  });

  test("computes flex wrap alignment", function(assert) {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set("flexWrapAlignment", FLEX_WRAP_ALIGNMENT_OPTIONS.BETWEEN);

    assert.equal(subject.get("flexWrapAlignmentClass"), "uk-flex-wrap-between");
  });
});
