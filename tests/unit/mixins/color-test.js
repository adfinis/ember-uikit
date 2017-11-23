import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import ColorMixin, { ALL_COLORS } from 'ember-uikit/mixins/color';

describe('Unit | Mixin | color', function() {
  it('computes the color', function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create({
      colorTemplate: 'foobar-$color$'
    });

    expect(() => subject.set('color', ALL_COLORS.PRIMARY)).to.not.throw();

    expect(subject.get('_colorClass')).to.equal(`foobar-${ALL_COLORS.PRIMARY}`);
  });

  it('fails with invalid colors', function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create();

    expect(() => subject.set('color', 'invalidcolor')).to.throw();
  });

  it('can exclude colors', function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create();

    expect(() => subject.set('color', ALL_COLORS.PRIMARY)).to.not.throw();

    subject.set('excludedColors', [ALL_COLORS.PRIMARY]);

    expect(() => subject.set('color', ALL_COLORS.PRIMARY)).to.throw();
  });

  it('can include colors', function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create();

    expect(() => subject.set('color', ALL_COLORS.PRIMARY)).to.not.throw();

    subject.set('includedColors', [ALL_COLORS.SECONDARY]);

    expect(() => subject.set('color', ALL_COLORS.PRIMARY)).to.throw();
    expect(() => subject.set('color', ALL_COLORS.SECONDARY)).to.not.throw();
  });
});
