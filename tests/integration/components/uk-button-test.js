import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk button', function() {
  setupComponentTest('uk-button', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-button}}
    //     template content
    //   {{/uk-button}}
    // `);

    this.render(hbs`{{uk-button}}`);
    expect(this.$()).to.have.length(1);
  });
});
