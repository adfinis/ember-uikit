import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk switcher", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`
      {{#uk-switcher as |switcher|}}
        {{#switcher.nav type='subnav' as |nav|}}
          {{#nav.component as |subnav|}}
            {{#subnav.item}}Item 1{{/subnav.item}}
            {{#subnav.item}}Item 2{{/subnav.item}}
          {{/nav.component}}
        {{/switcher.nav}}

        {{#switcher.content as |content|}}
          {{#content.item}}Content 1{{/content.item}}
          {{#content.item}}Content 2{{/content.item}}
        {{/switcher.content}}
      {{/uk-switcher}}
    `);

    assert.dom("ul.uk-subnav").exists();
    assert.dom("li").exists({ count: 4 });
    assert.dom("a").exists({ count: 2 });
  });
});
