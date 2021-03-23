import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | uk card", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      {{#uk-card as |card|}}
        {{#card.header}}
          {{#card.title}}Header{{/card.title}}
        {{/card.header}}
        {{#card.body}}
          Body
        {{/card.body}}
        {{#card.footer}}
          Footer
        {{/card.footer}}
      {{/uk-card}}
    `);

    assert.dom(".uk-card").exists();
    assert.dom(".uk-card .uk-card-header").exists();
    assert.dom(".uk-card .uk-card-header .uk-card-title").exists();
    assert.dom(".uk-card .uk-card-body").exists();
    assert.dom(".uk-card .uk-card-footer").exists();
  });

  test("can set hover", async function (assert) {
    await render(hbs`{{uk-card hover=true}}`);

    assert.dom(".uk-card").hasClass("uk-card-hover");
  });

  test("can set color", async function (assert) {
    await render(hbs`{{uk-card color='primary'}}`);

    assert.dom(".uk-card").hasClass("uk-card-primary");
  });

  test("can set size", async function (assert) {
    await render(hbs`{{uk-card size='small'}}`);

    assert.dom(".uk-card").hasClass("uk-card-small");
  });
});
