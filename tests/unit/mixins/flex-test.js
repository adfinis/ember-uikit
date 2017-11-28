import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import FlexMixin, {
  FLEX_HORIZONTAL_OPTIONS,
  FLEX_VERTICAL_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FLEX_WRAP_ALIGNMENT_OPTIONS
} from 'ember-uikit/mixins/flex';

describe('Unit | Mixin | flex', function() {
  it('computes flex horizontal', function() {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set('flexHorizontal', FLEX_HORIZONTAL_OPTIONS.CENTER);

    expect(subject.get('flexHorizontalClass')).to.equal('uk-flex-center');
  });

  it('computes flex vertical', function() {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set('flexVertical', FLEX_VERTICAL_OPTIONS.MIDDLE);

    expect(subject.get('flexVerticalClass')).to.equal('uk-flex-middle');
  });

  it('computes flex direction', function() {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set('flexDirection', FLEX_DIRECTION_OPTIONS.COLUMN_REVERSE);

    expect(subject.get('flexDirectionClass')).to.equal(
      'uk-flex-column-reverse'
    );
  });

  it('computes flex wrap', function() {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set('flexWrap', FLEX_WRAP_OPTIONS.NOWRAP);

    expect(subject.get('flexWrapClass')).to.equal('uk-flex-nowrap');
  });

  it('computes flex wrap alignment', function() {
    let FlexObject = EmberObject.extend(FlexMixin);

    let subject = FlexObject.create();

    subject.set('flexWrapAlignment', FLEX_WRAP_ALIGNMENT_OPTIONS.BETWEEN);

    expect(subject.get('flexWrapAlignmentClass')).to.equal(
      'uk-flex-wrap-between'
    );
  });
});
