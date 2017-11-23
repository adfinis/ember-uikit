import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

describe('Integration | Component | uk button', function() {
  setupComponentTest('uk-button', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-button}}Click me!{{/uk-button}}`);

    expect(find('.uk-button').innerHTML).to.equal('Click me!');
  });

  it('can set label', function() {
    this.render(hbs`{{uk-button label='Click me!'}}`);

    expect(find('.uk-button').innerHTML).to.equal('Click me!');
  });

  it('can set disabled', function() {
    this.render(hbs`{{#uk-button disabled=true}}Click me!{{/uk-button}}`);

    expect(find('.uk-button[disabled]')).to.be.ok;
  });

  it('can set active', function() {
    this.render(hbs`{{#uk-button active=true}}Click me!{{/uk-button}}`);

    expect(find('.uk-button.uk-active')).to.be.ok;
  });

  it('can set loading', function() {
    this.render(hbs`{{#uk-button loading=true}}Click me!{{/uk-button}}`);

    expect(find('.uk-button [uk-spinner]')).to.be.ok;
  });

  it('can set color', function() {
    this.render(hbs`{{#uk-button color='primary'}}Click me!{{/uk-button}}`);

    expect(find('.uk-button.uk-button-primary')).to.be.ok;
  });

  it('can set size', function() {
    this.render(hbs`{{#uk-button size='large'}}Click me!{{/uk-button}}`);

    expect(find('.uk-button.uk-button-large')).to.be.ok;
  });

  it('can set width', function() {
    this.render(hbs`{{#uk-button width='1-1'}}Click me!{{/uk-button}}`);

    expect(find('.uk-button.uk-width-1-1')).to.be.ok;
  });

  it('fires on-click action', function() {
    this.set('didClick', false);

    this.render(
      hbs`{{#uk-button on-click=(action (mut didClick) true)}}Click me!{{/uk-button}}`
    );

    expect(this.get('didClick')).to.be.false;

    click('.uk-button');

    expect(this.get('didClick')).to.be.true;
  });
});
