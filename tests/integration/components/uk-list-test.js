import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find, findAll } from "ember-native-dom-helpers";

describe("Integration | Component | uk list", function() {
  setupComponentTest("uk-list", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`
      {{#uk-list as |list|}}
        {{#list.item}}Foo{{/list.item}}
        {{#list.item}}Bar{{/list.item}}
        {{#list.item}}Baz{{/list.item}}
      {{/uk-list}}
    `);

    expect(find(".uk-list")).to.be.ok;
    expect(findAll("li")).to.have.length(3);
  });

  it("can set divider", function() {
    this.render(hbs`{{uk-list divider=true}}`);

    expect(find(".uk-list.uk-list-divider")).to.be.ok;
  });

  it("can set striped", function() {
    this.render(hbs`{{uk-list striped=true}}`);

    expect(find(".uk-list.uk-list-striped")).to.be.ok;
  });

  it("can set bullet", function() {
    this.render(hbs`{{uk-list bullet=true}}`);

    expect(find(".uk-list.uk-list-bullet")).to.be.ok;
  });

  it("can set large", function() {
    this.render(hbs`{{uk-list large=true}}`);

    expect(find(".uk-list.uk-list-large")).to.be.ok;
  });
});
