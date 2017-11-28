import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

describe('Integration | Component | uk switcher', function() {
  setupComponentTest('uk-switcher', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`
      {{#uk-switcher as |switcher|}}
        {{#switcher.nav type='subnav' as |nav|}}
          {{#nav.component as |subnav|}}
            {{#subnav.item}}Item 1{{/subnav.item}}
            {{#subnav.item}}Item 2{{/subnav.item}}
          {{/nav.component}}
        {{/switcher.nav}}

        {{#switcher.content as |content|}}
          {{#content.item}}Content 1{{/content.item}}
          {{#content.item}}Content 2{{/content.item}}
        {{/switcher.content}}
      {{/uk-switcher}}
    `);

    expect(find('ul.uk-subnav')).to.be.ok;

    expect(findAll('li')).to.have.length(4);
    expect(findAll('a')).to.have.length(2);
  });
});
