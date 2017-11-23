import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import WidthMixin from 'ember-uikit/mixins/width';

describe('Unit | Mixin | width', function() {
  it('computes the width', function() {
    let WidthObject = EmberObject.extend(WidthMixin);

    let subject = WidthObject.create({
      _widthTemplate: 'foo-$width$'
    });

    expect(() =>
      subject.set('width', '1-1 1-2@m medium@l auto@xl')
    ).to.not.throw();

    expect(subject.get('_widthClasses')).to.equal(
      'foo-1-1 foo-1-2@m foo-medium@l foo-auto@xl'
    );
  });

  it('filters invalid widths', function() {
    let WidthObject = EmberObject.extend(WidthMixin);

    let subject = WidthObject.create({
      _widthTemplate: 'foo-$width$'
    });

    expect(() =>
      subject.set('width', '1-8 1-2@x somestring auto@xl')
    ).to.not.throw();

    expect(subject.get('_widthClasses')).to.equal('foo-auto@xl');
  });
});
