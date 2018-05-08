import { expect } from "chai";
import { describe, it } from "mocha";
import EmberObject from "@ember/object";
import ColorMixin, { COLOR_OPTIONS } from "ember-uikit/mixins/color";

describe("Unit | Mixin | color", function() {
  it("computes the color", function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create({
      colorTemplate: "foobar-$color$"
    });

    subject.set("color", COLOR_OPTIONS.PRIMARY);

    expect(subject.get("colorClass")).to.equal("foobar-primary");
  });

  it("ignores invalid colors", function() {
    let ColorObject = EmberObject.extend(ColorMixin);

    let subject = ColorObject.create();

    subject.set("color", "invalidcolor");

    expect(subject.get("colorClass")).to.be.empty;
  });
});
