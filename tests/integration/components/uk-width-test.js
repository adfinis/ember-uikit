import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk width', function() {
  setupComponentTest('uk-width', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-width '1-1'}}Test{{/uk-width}}`);

    expect(find('.uk-width-1-1')).to.be.ok;

    expect(find('.uk-width-1-1').innerHTML).to.equal('Test');
  });

  it('can set width', function() {
    this.render(hbs`{{uk-width width='1-1'}}`);

    expect(find('.uk-width-1-1')).to.be.ok;
  });
});
