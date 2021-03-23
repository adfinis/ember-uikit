import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { module, test } from "qunit";

module("Acceptance | index", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
  });
});
