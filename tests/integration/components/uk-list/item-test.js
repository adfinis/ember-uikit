import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk list/item", function() {
  setupComponentTest("uk-list/item", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{uk-list/item}}`);

    expect(find("li")).to.be.ok;
  });
});
