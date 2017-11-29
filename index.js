/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-uikit',

  treeForVendor(defaultTree) {
    let browserVendorLib = new Funnel('node_modules/uikit/dist/js');

    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new Merge([defaultTree, browserVendorLib]);
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

    app.import('vendor/uikit.min.js');
    app.import('node_modules/uikit/dist/js/uikit-icons.min.js');
  }
};
