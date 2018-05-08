import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk card/body", function() {
  setupComponentTest("uk-card/body", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{#uk-card/body}}Content{{/uk-card/body}}`);

    expect(find(".uk-card-body")).to.be.ok;
  });
});
