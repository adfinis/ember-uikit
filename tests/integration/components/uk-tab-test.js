import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

describe('Integration | Component | uk tab', function() {
  setupComponentTest('uk-tab', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`
      {{#uk-tab as |tab|}}
        {{#tab.item}}Item 1{{/tab.item}}
        {{#tab.link-item 'index'}}Item 2{{/tab.link-item}}
      {{/uk-tab}}
    `);

    expect(find('ul.uk-tab[uk-tab]')).to.be.ok;

    expect(findAll('li')).to.have.length(2);
    expect(findAll('a')).to.have.length(2);
  });

  it('can set bottom', function() {
    this.render(hbs`{{uk-tab bottom=true}}`);

    expect(find('ul.uk-tab.uk-tab-bottom')).to.be.ok;
  });

  it('can set left', function() {
    this.render(hbs`{{uk-tab left=true}}`);

    expect(find('ul.uk-tab.uk-tab-left')).to.be.ok;
  });

  it('can set right', function() {
    this.render(hbs`{{uk-tab right=true}}`);

    expect(find('ul.uk-tab.uk-tab-right')).to.be.ok;
  });
});
