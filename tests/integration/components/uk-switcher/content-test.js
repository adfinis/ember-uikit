import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

describe('Integration | Component | uk switcher/content', function() {
  setupComponentTest('uk-switcher/content', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`
      {{#uk-switcher/content as |content|}}
        {{#content.item}}Content 1{{/content.item}}
        {{#content.item}}Content 2{{/content.item}}
      {{/uk-switcher/content}}
    `);

    expect(find('ul')).to.be.ok;

    expect(findAll('li')).to.have.length(2);
  });
});
