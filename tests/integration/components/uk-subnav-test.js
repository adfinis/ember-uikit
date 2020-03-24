import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk subnav", function (hooks) {
  setupRenderingTest(hooks);

  test("renders", async function (assert) {
    await render(hbs`
      {{#uk-subnav as |nav|}}
        {{#nav.item}}Item 1{{/nav.item}}
        {{#nav.link-item 'index'}}Item 2{{/nav.link-item}}
      {{/uk-subnav}}
    `);

    assert.dom("ul.uk-subnav").exists();
    assert.dom("li").exists({ count: 2 });
    assert.dom("a").exists({ count: 2 });
  });

  test("can set pill", async function (assert) {
    await render(hbs`{{uk-subnav pill=true}}`);

    assert.dom("ul.uk-subnav").hasClass("uk-subnav-pill");
  });

  test("can set divider", async function (assert) {
    await render(hbs`{{uk-subnav divider=true}}`);

    assert.dom("ul.uk-subnav").hasClass("uk-subnav-divider");
  });
});
