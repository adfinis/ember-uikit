import Controller from '@ember/controller';
import { A } from '@ember/array';
import UIkit from 'uikit';

export default Controller.extend({
  group1: A([
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]),

  group2: A([
    { label: 'Item 5' },
    { label: 'Item 6' },
    { label: 'Item 7' },
    { label: 'Item 8' }
  ]),

  includeA: false,
  animationDuration: 150,

  actions: {
    notify(message) {
      UIkit.notification({ message });
    }
  }
});
