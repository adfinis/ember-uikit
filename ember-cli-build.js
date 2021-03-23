/* eslint-env node */
"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");
const sass = require("sass");

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    sassOptions: { implementation: sass },
    fingerprint: {
      prepend: "https://adfinis-sygroup.github.io/ember-uikit/",
    },
    snippetPaths: ["tests/dummy/app/snippets"],
    "ember-prism": {
      theme: "twilight",
      components: [
        "javascript",
        "handlebars",
        "markup",
        "markup-templating",
        "bash",
      ],
    },
  });

  return app.toTree();
};
