import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import SizeMixin, { ALL_SIZES } from 'ember-uikit/mixins/size';

describe('Unit | Mixin | size', function() {
  it('computes the size', function() {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create({
      sizeTemplate: 'foobar-$size$'
    });

    expect(() => subject.set('size', ALL_SIZES.LARGE)).to.not.throw();

    expect(subject.get('_sizeClass')).to.equal(`foobar-${ALL_SIZES.LARGE}`);
  });

  it('fails with invalid sizes', function() {
    let SizeObject = EmberObject.extend(SizeMixin);

    let subject = SizeObject.create();

    expect(() => subject.set('size', 'invalidsize')).to.throw();
  });
});
