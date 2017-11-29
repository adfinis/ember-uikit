import Component from '@ember/component';
import layout from '../templates/components/uk-width';
import WidthMixin from 'ember-uikit/mixins/width';

const UkWidthComponent = Component.extend(WidthMixin, {
  layout
});

UkWidthComponent.reopenClass({
  positionalParams: ['width']
});

export default UkWidthComponent;
