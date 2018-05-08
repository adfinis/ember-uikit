import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";
import { find } from "ember-native-dom-helpers";

describe("Integration | Component | uk label", function() {
  setupComponentTest("uk-label", {
    integration: true
  });

  it("renders", function() {
    this.render(hbs`{{#uk-label}}Test{{/uk-label}}`);

    expect(find("span.uk-label")).to.be.ok;

    expect(find("span.uk-label").innerHTML).to.equal("Test");
  });

  it("can set label", function() {
    this.render(hbs`{{uk-label label='Test'}}`);

    expect(find("span.uk-label").innerHTML).to.equal("Test");
  });

  it("can set color", function() {
    this.render(hbs`{{uk-label color='danger' label='Test'}}`);

    expect(find("span.uk-label.uk-label-danger")).to.be.ok;
  });
});
