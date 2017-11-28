import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import WidthMixin, {
  GRID_OPTIONS,
  FIXED_OPTIONS,
  SPECIAL_OPTIONS
} from 'ember-uikit/mixins/width';
import MEDIA_OPTIONS from 'ember-uikit/-private/media';

describe('Unit | Mixin | width', function() {
  it('computes the width', function() {
    let WidthObject = EmberObject.extend(WidthMixin);

    let subject = WidthObject.create({
      _widthTemplate: 'foo-$width$'
    });

    subject.set(
      'width',
      `${GRID_OPTIONS['1_OF_1']} ${GRID_OPTIONS['1_OF_2']}${
        MEDIA_OPTIONS.MEDIUM
      } ${FIXED_OPTIONS.MEDIUM}${MEDIA_OPTIONS.LARGE} ${SPECIAL_OPTIONS.AUTO}${
        MEDIA_OPTIONS.XLARGE
      }`
    );

    expect(subject.get('widthClass')).to.equal(
      'foo-1-1 foo-1-2@m foo-medium@l foo-auto@xl'
    );
  });

  it('ignores invalid width', function() {
    let WidthObject = EmberObject.extend(WidthMixin);

    let subject = WidthObject.create({
      _widthTemplate: 'foo-$width$'
    });

    subject.set('width', '1-8 1-2@x somestring auto@xl');

    expect(subject.get('widthClass')).to.equal('foo-auto@xl');
  });
});
