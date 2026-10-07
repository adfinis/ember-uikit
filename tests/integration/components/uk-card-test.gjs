import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkCard from "ember-uikit/components/uk-card";

module("Integration | Component | uk card", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkCard as |card|>
          <card.header>
            <card.title>Header</card.title>
          </card.header>
          <card.body>
            Body
          </card.body>
          <card.footer>
            Footer
          </card.footer>
        </UkCard>
      </template>,
    );

    assert.dom(".uk-card").exists();
    assert.dom(".uk-card .uk-card-header").exists();
    assert.dom(".uk-card .uk-card-header .uk-card-title").exists();
    assert.dom(".uk-card .uk-card-body").exists();
    assert.dom(".uk-card .uk-card-footer").exists();
  });

  test("can set hover", async function (assert) {
    await render(<template><UkCard @hover={{true}} /></template>);

    assert.dom(".uk-card").hasClass("uk-card-hover");
  });

  test("can set color", async function (assert) {
    await render(<template><UkCard @color="primary" /></template>);

    assert.dom(".uk-card").hasClass("uk-card-primary");
  });

  test("can set size", async function (assert) {
    await render(<template><UkCard @size="small" /></template>);

    assert.dom(".uk-card").hasClass("uk-card-small");
  });
});
