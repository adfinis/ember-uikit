import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk tab/link item', function() {
  setupComponentTest('uk-tab/link-item', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-tab/link-item 'index'}}Test{{/uk-tab/link-item}}`);

    expect(find('li')).to.be.ok;
    expect(find('a')).to.be.ok;

    expect(find('a').innerHTML).to.equal('Test');
  });

  it('can be disabled', function() {
    this.render(
      hbs`{{#uk-tab/link-item 'index' disabled=true}}Test{{/uk-tab/link-item}}`
    );

    expect(Array.from(find('li').classList)).to.include('uk-disabled');
  });
});
