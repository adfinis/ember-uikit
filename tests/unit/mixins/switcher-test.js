import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import SwitcherMixin from 'ember-uikit/mixins/switcher';

describe('Unit | Mixin | switcher', function() {
  // Replace this with your real tests.
  it('works', function() {
    let SwitcherObject = EmberObject.extend(SwitcherMixin);
    let subject = SwitcherObject.create();
    expect(subject).to.be.ok;
  });
});
