import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk icon", function() {
  setupComponentTest("uk-icon", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{uk-icon 'home' ratio=2}}`);

    expect(find("[uk-icon]")).to.be.ok;

    expect(find("[uk-icon]")).to.be.ok;

    expect(find("[uk-icon]").getAttribute("icon")).to.equal("home");
    expect(find("[uk-icon]").getAttribute("ratio")).to.equal("2");
  });
});
