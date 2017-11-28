import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import EventedMixin from 'ember-uikit/mixins/evented';

describe('Unit | Mixin | evented', function() {
  // Replace this with your real tests.
  it('works', function() {
    let EventedObject = EmberObject.extend(EventedMixin);
    let subject = EventedObject.create();
    expect(subject).to.be.ok;
  });
});
