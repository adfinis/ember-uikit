import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find, findAll } from "ember-native-dom-helpers";

describe("Integration | Component | uk subnav", function() {
  setupComponentTest("uk-subnav", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`
      {{#uk-subnav as |nav|}}
        {{#nav.item}}Item 1{{/nav.item}}
        {{#nav.link-item 'index'}}Item 2{{/nav.link-item}}
      {{/uk-subnav}}
    `);

    expect(find("ul.uk-subnav")).to.be.ok;

    expect(findAll("li")).to.have.length(2);
    expect(findAll("a")).to.have.length(2);
  });

  it("can set pill", function() {
    this.render(hbs`{{uk-subnav pill=true}}`);

    expect(find("ul.uk-subnav.uk-subnav-pill")).to.be.ok;
  });

  it("can set divider", function() {
    this.render(hbs`{{uk-subnav divider=true}}`);

    expect(find("ul.uk-subnav.uk-subnav-divider")).to.be.ok;
  });
});
