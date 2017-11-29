import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk flex', function() {
  setupComponentTest('uk-flex', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{#uk-flex}}Test{{/uk-flex}}`);

    expect(find('.uk-flex')).to.be.ok;

    expect(find('.uk-flex').innerHTML).to.equal('Test');
  });

  it('can set inline', function() {
    this.render(hbs`{{uk-flex inline=true}}`);

    expect(find('.uk-flex-inline')).to.be.ok;
  });

  it('can set horizontal', function() {
    this.render(hbs`{{uk-flex horizontal='center'}}`);

    expect(find('.uk-flex-center')).to.be.ok;
  });

  it('can set vertical', function() {
    this.render(hbs`{{uk-flex vertical='middle'}}`);

    expect(find('.uk-flex-middle')).to.be.ok;
  });

  it('can set direction', function() {
    this.render(hbs`{{uk-flex direction='column-reverse'}}`);

    expect(find('.uk-flex-column-reverse')).to.be.ok;
  });

  it('can set wrap', function() {
    this.render(hbs`{{uk-flex wrap='nowrap'}}`);

    expect(find('.uk-flex-nowrap')).to.be.ok;
  });

  it('can set wrap alignment', function() {
    this.render(hbs`{{uk-flex wrapAlignment='around'}}`);

    expect(find('.uk-flex-wrap-around')).to.be.ok;
  });
});
