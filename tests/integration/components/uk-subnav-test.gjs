import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

import UkSubnav from "ember-uikit/components/uk-subnav";

module("Integration | Component | uk subnav", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(
      <template>
        <UkSubnav as |nav|>
          <nav.item>Item 1</nav.item>
          <nav.item @href="/">Item 2</nav.item>
        </UkSubnav>
      </template>,
    );

    assert.dom("ul.uk-subnav").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("can set pill", async function (assert) {
    await render(<template><UkSubnav @pill={{true}} /></template>);

    assert.dom("ul.uk-subnav").hasClass("uk-subnav-pill");
  });

  test("can set divider", async function (assert) {
    await render(<template><UkSubnav @divider={{true}} /></template>);

    assert.dom("ul.uk-subnav").hasClass("uk-subnav-divider");
  });
});
