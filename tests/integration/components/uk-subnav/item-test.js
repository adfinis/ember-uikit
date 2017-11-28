import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk subnav/item', function() {
  setupComponentTest('uk-subnav/item', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-subnav/item}}Test{{/uk-subnav/item}}`);

    expect(find('li')).to.be.ok;
    expect(find('a')).to.be.ok;

    expect(find('a').innerHTML).to.equal('Test');
  });

  it('can be active', function() {
    this.render(hbs`{{#uk-subnav/item active=true}}Test{{/uk-subnav/item}}`);

    expect(Array.from(find('li').classList)).to.include('uk-active');
  });

  it('can be disabled', function() {
    this.render(hbs`{{#uk-subnav/item disabled=true}}Test{{/uk-subnav/item}}`);

    expect(Array.from(find('li').classList)).to.include('uk-disabled');
  });
});
