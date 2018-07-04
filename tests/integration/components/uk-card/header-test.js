import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk card/header", function() {
  setupComponentTest("uk-card/header", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{#uk-card/header}}Content{{/uk-card/header}}`);

    expect(find(".uk-card-header")).to.be.ok;
  });
});
