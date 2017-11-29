import Controller from '@ember/controller';
import { LABEL_COLOR_OPTIONS } from 'ember-uikit/components/uk-label';

export default Controller.extend({
  label: 'Label',
  color: '',
  colors: LABEL_COLOR_OPTIONS
});
