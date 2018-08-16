import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk flex", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-flex}}Test{{/uk-flex}}`);

    assert.dom(".uk-flex").exists();
    assert.dom(".uk-flex").hasText("Test");
  });

  test("can set inline", async function(assert) {
    await render(hbs`{{uk-flex inline=true}}`);

    assert.dom(".uk-flex-inline").exists();
  });

  test("can set horizontal", async function(assert) {
    await render(hbs`{{uk-flex horizontal='center'}}`);

    assert.dom(".uk-flex-center").exists();
  });

  test("can set vertical", async function(assert) {
    await render(hbs`{{uk-flex vertical='middle'}}`);

    assert.dom(".uk-flex-middle").exists();
  });

  test("can set direction", async function(assert) {
    await render(hbs`{{uk-flex direction='column-reverse'}}`);

    assert.dom(".uk-flex-column-reverse").exists();
  });

  test("can set wrap", async function(assert) {
    await render(hbs`{{uk-flex wrap='nowrap'}}`);

    assert.dom(".uk-flex-nowrap").exists();
  });

  test("can set wrap alignment", async function(assert) {
    await render(hbs`{{uk-flex wrapAlignment='around'}}`);

    assert.dom(".uk-flex-wrap-around").exists();
  });
});
