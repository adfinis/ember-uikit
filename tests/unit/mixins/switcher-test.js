import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import SwitcherMixin from 'ember-uikit/mixins/switcher';

describe('Unit | Mixin | switcher', function() {
  it('computes connect property', function() {
    let SwitcherObject = EmberObject.extend(SwitcherMixin);

    let subject = SwitcherObject.create();

    expect(subject).to.be.ok;

    expect(subject.get('connect')).to.equal('');

    subject.set('contentId', 'test');

    expect(subject.get('connect')).to.equal('#test');
  });
});
