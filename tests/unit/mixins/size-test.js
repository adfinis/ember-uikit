import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import SizeMixin, { SIZE_OPTIONS } from 'ember-uikit/mixins/size';

describe('Unit | Mixin | size', function() {
  it('computes the size', function() {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create({
      sizeTemplate: 'foobar-$size$'
    });

    subject.set('size', SIZE_OPTIONS.LARGE);

    expect(subject.get('sizeClass')).to.equal('foobar-large');
  });

  it('ignores invalid sizes', function() {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create();

    subject.set('size', 'invalidsize');

    expect(subject.get('sizeClass')).to.be.empty;
  });
});
