import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk card', function() {
  setupComponentTest('uk-card', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-card}}
    //     template content
    //   {{/uk-card}}
    // `);

    this.render(hbs`{{uk-card}}`);
    expect(this.$()).to.have.length(1);
  });
});
