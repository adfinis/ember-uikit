import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk card', function() {
  setupComponentTest('uk-card', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`
      {{#uk-card as |card|}}
        {{#card.header}}
          {{#card.title}}Header{{/card.title}}
        {{/card.header}}
        {{#card.body}}
          Body
        {{/card.body}}
        {{#card.footer}}
          Footer
        {{/card.footer}}
      {{/uk-card}}
    `);

    expect(find('.uk-card')).to.be.ok;
    expect(find('.uk-card .uk-card-header')).to.be.ok;
    expect(find('.uk-card .uk-card-header .uk-card-title')).to.be.ok;
    expect(find('.uk-card .uk-card-body')).to.be.ok;
    expect(find('.uk-card .uk-card-footer')).to.be.ok;
  });

  it('can set hover', function() {
    this.render(hbs`{{uk-card hover=true}}`);

    expect(find('.uk-card.uk-card-hover')).to.be.ok;
  });

  it('can set color', function() {
    this.render(hbs`{{uk-card color='primary'}}`);

    expect(find('.uk-card.uk-card-primary')).to.be.ok;
  });

  it('can set size', function() {
    this.render(hbs`{{uk-card size='small'}}`);

    expect(find('.uk-card.uk-card-small')).to.be.ok;
  });

  it('can set width', function() {
    this.render(hbs`{{uk-card width='1-1'}}`);

    expect(find('.uk-card.uk-width-1-1')).to.be.ok;
  });
});
