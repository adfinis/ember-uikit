import { click, waitUntil, find } from "@ember/test-helpers";
import { setupTest } from "ember-qunit";
import { module, test } from "qunit";
import UIkit from "uikit";

module("Unit | Service | modal", function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {});

  test("can display modals", async function (assert) {
    assert.expect(9);

    const _original = UIkit.modal;
    const service = this.owner.lookup("service:modal");

    UIkit.modal = {
      alert: (msg) => {
        assert.strictEqual(msg, "Test");
        assert.step("alert");
      },
      confirm: (msg) => {
        assert.strictEqual(msg, "Test");
        assert.step("confirm");
      },
      prompt: (msg) => {
        assert.strictEqual(msg, "Test");
        assert.step("prompt");
      },
      dialog: (msg) => {
        assert.strictEqual(msg, "Test");
        assert.step("dialog");
      },
    };

    await service.alert("Test");
    await service.confirm("Test");
    await service.prompt("Test");
    await service.dialog("Test");

    assert.verifySteps(["alert", "confirm", "prompt", "dialog"]);
    UIkit.modal = _original;
  });

  test("can pass options", async function (assert) {
    assert.expect(2);

    const _original = UIkit.modal;
    const service = this.owner.lookup("service:modal");

    UIkit.modal = {
      confirm: (_, options) => {
        assert.strictEqual(options.timeout, 100);
        assert.strictEqual(options.container, "#modal-container");
      },
    };
    await service.confirm("Test", {
      container: "#modal-container",
      timeout: 100,
    });

    UIkit.modal = _original;
  });

  test("returns the selected response of the modal", async function (assert) {
    assert.expect(6);

    const service = this.owner.lookup("service:modal");
    let response = service.confirm("confirm");

    await waitUntil(() => find(".uk-modal.uk-open"));
    assert.dom(".uk-modal-body").hasText("confirm");
    await click(".uk-modal-footer .uk-button-primary");

    response = await response;
    assert.strictEqual(typeof response, "boolean");
    assert.true(response);

    response = service.confirm("confirm");

    await waitUntil(() => find(".uk-modal.uk-open"));
    assert.dom(".uk-modal-body").hasText("confirm");
    await click(".uk-modal-footer .uk-button-default");

    response = await response;
    assert.strictEqual(typeof response, "boolean");
    assert.false(response);
  });
});
