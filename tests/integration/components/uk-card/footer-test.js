import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk card/footer", function() {
  setupComponentTest("uk-card/footer", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{#uk-card/footer}}Content{{/uk-card/footer}}`);

    expect(find(".uk-card-footer")).to.be.ok;
  });
});
