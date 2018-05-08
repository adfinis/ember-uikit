import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find, findAll } from "ember-native-dom-helpers";

describe("Integration | Component | uk switcher/nav", function() {
  setupComponentTest("uk-switcher/nav", {
    integration: true
  });

  it("renders with subnav", function() {
    this.render(hbs`
      {{#uk-switcher/nav type='subnav' as |nav|}}
        {{#nav.component as |subnav|}}
          {{#subnav.item}}Item 1{{/subnav.item}}
          {{#subnav.item}}Item 2{{/subnav.item}}
        {{/nav.component}}
      {{/uk-switcher/nav}}
    `);

    expect(find("ul.uk-subnav")).to.be.ok;

    expect(findAll("li")).to.have.length(2);
    expect(findAll("a")).to.have.length(2);
  });

  it("renders with tab", function() {
    this.render(hbs`
      {{#uk-switcher/nav type='tab' as |nav|}}
        {{#nav.component as |tab|}}
          {{#tab.item}}Item 1{{/tab.item}}
          {{#tab.item}}Item 2{{/tab.item}}
        {{/nav.component}}
      {{/uk-switcher/nav}}
    `);

    expect(find("ul.uk-tab")).to.be.ok;

    expect(findAll("li")).to.have.length(2);
    expect(findAll("a")).to.have.length(2);
  });
});
