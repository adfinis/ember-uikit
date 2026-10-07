import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkFlex from "ember-uikit/components/uk-flex";

module("Integration | Component | uk flex", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkFlex>Test</UkFlex>
      </template>,
    );

    assert.dom(".uk-flex").exists();
    assert.dom(".uk-flex").hasText("Test");
  });

  test("can set inline", async function (assert) {
    await render(<template><UkFlex @inline={{true}} /></template>);

    assert.dom(".uk-flex-inline").exists();
  });

  test("can set horizontal", async function (assert) {
    await render(<template><UkFlex @horizontal="center" /></template>);

    assert.dom(".uk-flex-center").exists();
  });

  test("can set vertical", async function (assert) {
    await render(<template><UkFlex @vertical="middle" /></template>);

    assert.dom(".uk-flex-middle").exists();
  });

  test("can set direction", async function (assert) {
    await render(<template><UkFlex @direction="column-reverse" /></template>);

    assert.dom(".uk-flex-column-reverse").exists();
  });

  test("can set wrap", async function (assert) {
    await render(<template><UkFlex @wrap="nowrap" /></template>);

    assert.dom(".uk-flex-nowrap").exists();
  });

  test("can set wrap alignment", async function (assert) {
    await render(<template><UkFlex @wrapAlignment="around" /></template>);

    assert.dom(".uk-flex-wrap-around").exists();
  });
});
