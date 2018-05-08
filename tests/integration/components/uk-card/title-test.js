import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk card/title", function() {
  setupComponentTest("uk-card/title", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{#uk-card/title}}Content{{/uk-card/title}}`);

    expect(find("h1.uk-card-title")).to.be.ok;
  });
});
