/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const buildAstTransform = require('./lib/ast-transform');

module.exports = {
  name: 'ember-uikit',

  setupPreprocessorRegistry(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      name: 'ember-uikit-static-transform',
      plugin: buildAstTransform(this),
      baseDir() {
        return __dirname;
      }
    });
  },

  treeForPublic(tree) {
    let uikitImages = new Funnel('node_modules/uikit/src/images', {
      destDir: '/assets/images/'
    });

    return new Merge([uikitImages, tree].filter(Boolean));
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths =
      app.options.sassOptions.includePaths || [];

    app.options.sassOptions.includePaths.push('node_modules');

    app.import('node_modules/uikit/dist/js/uikit.min.js');
    app.import('node_modules/uikit/dist/js/uikit-icons.min.js');
  }
};
