/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const path = require('path');

const DEFAULT_OPTIONS = {
  importUIkitCSS: true,
  importUIkitJS: true,
  importUIkitIcons: true,
  importUIkitAssets: true,

  useIcons: true
};

// For ember-cli < 2.7 findHost doesnt exist so we backport from that version
// for earlier version of ember-cli.
// https://github.com/ember-cli/ember-cli/blame/16e4492c9ebf3348eb0f31df17215810674dbdf6/lib/models/addon.js#L533

module.exports = {
  name: 'ember-uikit',

  findHost() {
    let fn =
      this._findHost ||
      function() {
        let current = this;
        let app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };

    return fn.call(this);
  },

  treeForPublic(tree) {
    let uikitAssets =
      this.uikitOptions.importUIkitAssets &&
      Funnel(this._getAssetsPath(), {
        destDir: '/assets/images/components'
      });

    let uikitIcons =
      this.uikitOptions.useIcons &&
      this.uikitOptions.importUIkitIcons &&
      new Funnel(this._getIconsPath(), {
        destDir: '/assets/images/icons'
      });

    return new Merge([uikitAssets, uikitIcons, tree].filter(Boolean));
  },

  treeForStyles(tree) {
    let uikitStyles =
      this._hasSass() &&
      this.uikitOptions.importUIkitCSS &&
      new Funnel(this._getStylesPath(), {
        destDir: 'ember-uikit'
      });

    return new Merge([uikitStyles, tree].filter(Boolean));
  },

  included() {
    this._super.included.apply(this, arguments);

    this.app = this.findHost();

    let options = Object.assign(
      Object.assign({}, DEFAULT_OPTIONS),
      this.app.options['ember-uikit']
    );

    this.uikitOptions = options;

    if (!this._hasSass() && this.uikitOptions.importUIkitCSS) {
      // use compiled css version of uikit
      this.app.import(path.join(this._getStylesPath(), 'uikit.css'));
    }

    if (this.uikitOptions.importUIkitJS) {
      this.app.import(path.join(this._getDistPath(), 'js', 'uikit.js'));

      if (this.uikitOptions.useIcons) {
        this.app.import(path.join(this._getDistPath(), 'js', 'uikit-icons.js'));
      }
    }
  },

  _hasSass() {
    return !!this.app.project.findAddonByName('ember-cli-sass');
  },

  _getNodeModulesPath() {
    return path.relative(process.cwd(), this.app.project.nodeModulesPath);
  },

  _getDistPath() {
    return path.join(this._getNodeModulesPath(), 'uikit', 'dist');
  },

  _getIconsPath() {
    return path.join(
      this._getNodeModulesPath(),
      'uikit',
      'src',
      'images',
      'icons'
    );
  },

  _getAssetsPath() {
    return path.join(
      this._getNodeModulesPath(),
      'uikit',
      'src',
      'images',
      'components'
    );
  },

  _getStylesPath() {
    let uikitPath = path.join(this._getNodeModulesPath(), 'uikit');

    if (this._hasSass()) {
      return path.join(uikitPath, 'src', 'scss');
    }

    return path.join(uikitPath, 'dist', 'css');
  }
};
