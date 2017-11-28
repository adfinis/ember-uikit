import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk subnav/link item', function() {
  setupComponentTest('uk-subnav/link-item', {
    integration: true
  });

  it('renders', function() {
    this.render(
      hbs`{{#uk-subnav/link-item 'index'}}Test{{/uk-subnav/link-item}}`
    );

    expect(find('li')).to.be.ok;
    expect(find('a')).to.be.ok;

    expect(find('a').innerHTML).to.equal('Test');
  });

  it('can be disabled', function() {
    this.render(
      hbs`{{#uk-subnav/link-item 'index' disabled=true}}Test{{/uk-subnav/link-item}}`
    );

    expect(Array.from(find('li').classList)).to.include('uk-disabled');
  });
});
