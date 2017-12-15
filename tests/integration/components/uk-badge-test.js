import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk badge', function() {
  setupComponentTest('uk-badge', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-badge}}Test{{/uk-badge}}`);

    expect(find('span.uk-badge')).to.be.ok;

    expect(find('span.uk-badge').innerHTML).to.equal('Test');
  });

  it('can set label', function() {
    this.render(hbs`{{uk-badge label='Test'}}`);

    expect(find('span.uk-badge').innerHTML).to.equal('Test');
  });
});
