import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk card/title', function() {
  setupComponentTest('uk-card/title', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-card/title}}
    //     template content
    //   {{/uk-card/title}}
    // `);

    this.render(hbs`{{uk-card/title}}`);
    expect(this.$()).to.have.length(1);
  });
});
