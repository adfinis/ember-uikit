import { setupTest } from "ember-qunit";
import { module, test } from "qunit";
import { Promise } from "rsvp";
import UIkit from "uikit";

module("Unit | Service | notification", function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {});

  test("can display notifications", function (assert) {
    assert.expect(10);

    const _original = UIkit.notification;
    const service = this.owner.lookup("service:notification");

    UIkit.notification = (o) => {
      assert.equal(o.message, "Test");
      assert.equal(o.status, "default");
    };
    service.default("Test");

    UIkit.notification = (o) => {
      assert.equal(o.message, "Test");
      assert.equal(o.status, "primary");
    };
    service.primary("Test");

    UIkit.notification = (o) => {
      assert.equal(o.message, "Test");
      assert.equal(o.status, "success");
    };
    service.success("Test");

    UIkit.notification = (o) => {
      assert.equal(o.message, "Test");
      assert.equal(o.status, "warning");
    };
    service.warning("Test");

    UIkit.notification = (o) => {
      assert.equal(o.message, "Test");
      assert.equal(o.status, "danger");
    };
    service.danger("Test");

    UIkit.notification = _original;
  });

  test("can pass options", function (assert) {
    assert.expect(2);

    const _original = UIkit.notification;
    const service = this.owner.lookup("service:notification");

    UIkit.notification = (o) => {
      assert.equal(o.timeout, 100);
      assert.equal(o.pos, "bottom-left");
    };
    service.default("Test", { pos: "bottom-left", timeout: 100 });

    UIkit.notification = _original;
  });

  test("returns a promise", function (assert) {
    assert.expect(1);

    const service = this.owner.lookup("service:notification");

    assert.ok(service.default("Test") instanceof Promise);
  });
});
