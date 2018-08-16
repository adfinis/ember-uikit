import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk switcher/content", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`
      {{#uk-switcher/content as |content|}}
        {{#content.item}}Content 1{{/content.item}}
        {{#content.item}}Content 2{{/content.item}}
      {{/uk-switcher/content}}
    `);

    assert.dom("ul").exists();
    assert.dom("li").exists({ count: 2 });
  });
});
