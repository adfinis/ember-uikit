import { click, waitUntil, find } from "@ember/test-helpers";
import confirm from "dummy/utils/confirm";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";
import UIkit from "uikit";

module("Unit | Utility | confirm", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    UIkit.container = this.element;
  });

  test("it can confirm", async function (assert) {
    confirm("confirm").then((result) => {
      assert.true(result);
      assert.step("confirmed");
    });

    await waitUntil(() => find(".uk-modal.uk-open"));
    assert.dom(".uk-modal-body").hasText("confirm");
    await click(".uk-modal-footer .uk-button-primary");

    assert.verifySteps(["confirmed"]);
  });

  test("it can abort", async function (assert) {
    confirm("abort").then((result) => {
      assert.false(result);
      assert.step("rejected");
    });

    await waitUntil(() => find(".uk-modal.uk-open"));
    assert.dom(".uk-modal-body").hasText("abort");
    await click(".uk-modal-footer .uk-button-default");

    assert.verifySteps(["rejected"]);
  });
});
