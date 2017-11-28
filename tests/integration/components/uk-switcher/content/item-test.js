import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk switcher/content/item', function() {
  setupComponentTest('uk-switcher/content/item', {
    integration: true
  });

  it('renders', function() {
    this.render(
      hbs`{{#uk-switcher/content/item}}Test{{/uk-switcher/content/item}}`
    );

    expect(find('li')).to.be.ok;
    expect(find('li').innerHTML).to.equal('Test');
  });
});
