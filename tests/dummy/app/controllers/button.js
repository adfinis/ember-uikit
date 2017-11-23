import Controller from '@ember/controller';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('firedEvents', A());
  },

  label: 'Button',
  type: 'button',
  disabled: false,
  active: false,
  loading: false,
  color: 'default',
  size: '',
  width: '',

  fireEvent: task(function*(name) {
    this.get('firedEvents').pushObject(name);

    yield timeout(1000);

    this.get('firedEvents').removeObject(name);
  })
});
