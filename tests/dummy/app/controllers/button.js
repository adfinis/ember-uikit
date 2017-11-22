import Controller from '@ember/controller';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('firedEvents', A());
  },

  label: 'Button',
  disabled: false,
  active: false,
  style: '',
  size: '',
  fill: false,

  fireEvent: task(function*(name) {
    this.get('firedEvents').pushObject(name);

    yield timeout(1000);

    this.get('firedEvents').removeObject(name);
  })
});
