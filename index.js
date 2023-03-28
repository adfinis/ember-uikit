"use strict";

const path = require("path");

const funnel = require("broccoli-funnel");
const merge = require("broccoli-merge-trees");
const map = require("broccoli-stew").map;

const DEFAULT_OPTIONS = {
  importUIkitCSS: true,
  importUIkitJS: true,
  importUIkitIcons: true,
  importUIkitAssets: true,

  useIcons: true,

  whitelist: [],
  blacklist: [],
};

const COMPONENT_DEPENDENCIES = {
  "uk-switcher": ["uk-tab", "uk-subnav"],
};

module.exports = {
  name: require("./package").name,

  /**
   * For ember-cli < 2.7 findHost doesnt exist so we backport from that version
   * for earlier version of ember-cli.
   * https://github.com/ember-cli/ember-cli/blame/16e4492c9ebf3348eb0f31df17215810674dbdf6/lib/models/addon.js#L533
   */
  findHost() {
    const fn =
      this._findHost ||
      function () {
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
    const uikitAssets =
      this.uikitOptions.importUIkitAssets &&
      funnel(this._getAssetsPath(), {
        destDir: "/assets/images/components",
      });

    const uikitIcons =
      this.uikitOptions.useIcons &&
      this.uikitOptions.importUIkitIcons &&
      funnel(this._getIconsPath(), {
        destDir: "/assets/images/icons",
      });

    return merge([uikitAssets, uikitIcons, tree].filter(Boolean));
  },

  treeForStyles(tree) {
    const uikitStyles =
      this._hasSass() &&
      this.uikitOptions.importUIkitCSS &&
      funnel(this._getStylesPath(), {
        destDir: "ember-uikit",
      });

    return merge([uikitStyles, tree].filter(Boolean));
  },

  treeForVendor(tree) {
    let uikitScripts = funnel(path.join(this._getUikitPath(), "dist", "js"), {
      include: ["uikit.js", "uikit-icons.js"],
    });

    uikitScripts = map(
      uikitScripts,
      (content) => `if (typeof FastBoot === 'undefined') { ${content} }`
    );

    return merge([tree, uikitScripts].filter(Boolean));
  },

  included(...args) {
    this._super.included.apply(this, args);

    this.app = this.findHost();

    const options = Object.assign(
      Object.assign({}, DEFAULT_OPTIONS),
      this.app.options["ember-uikit"]
    );

    this.uikitOptions = options;

    if (
      this.uikitOptions.whitelist.length &&
      this.uikitOptions.blacklist.length
    ) {
      this.ui.writeWarnLine(
        "[ember-uikit]: `blacklist` and `whitelist` should not be used simultaneously - ignoring whitelist."
      );
    }

    if (!this.uikitOptions.useIcons) {
      this.uikitOptions.blacklist.push("uk-icon");
    }

    if (!this._hasSass() && this.uikitOptions.importUIkitCSS) {
      // use compiled css version of uikit
      this.app.import(path.join(this._getStylesPath(), "uikit.css"));
    }

    if (this.uikitOptions.importUIkitJS) {
      this.app.import(path.join("vendor", "uikit.js"));

      if (this.uikitOptions.useIcons) {
        this.app.import(path.join("vendor", "uikit-icons.js"));
      }
    }
  },

  _generateWhitelist(whitelist) {
    const list = [];

    if (!whitelist) {
      return list;
    }

    function _addToWhitelist(item) {
      if (list.indexOf(item) === -1) {
        list.push(item);

        if (COMPONENT_DEPENDENCIES[item]) {
          COMPONENT_DEPENDENCIES[item].forEach(_addToWhitelist);
        }
      }
    }

    whitelist.forEach(_addToWhitelist);
    return list;
  },

  treeForAddon(tree) {
    return this._super.treeForAddon.call(this, this._filterComponents(tree));
  },

  treeForAddonTemplates(tree) {
    return this._super.treeForAddonTemplates.call(
      this,
      this._filterComponents(tree)
    );
  },

  /**
   * Treeshaking stolen from ember-bootstrap all credits to @kaliber5
   */
  _filterComponents(tree) {
    const whitelist = this._generateWhitelist(this.uikitOptions.whitelist);
    const blacklist = this.uikitOptions.blacklist || [];

    // exit early if no opts defined
    if (whitelist.length === 0 && blacklist.length === 0) {
      return tree;
    }

    return funnel(tree, {
      exclude: [(name) => this._excludeComponent(name, whitelist, blacklist)],
    });
  },

  _excludeComponent(name, whitelist, blacklist) {
    const regex = /^(templates\/)?components\//;
    const isComponent = regex.test(name);

    if (!isComponent) {
      return false;
    }

    let baseName = name.replace(regex, "");
    const firstSeparator = baseName.indexOf("/");
    if (firstSeparator !== -1) {
      baseName = baseName.substring(0, firstSeparator);
    } else {
      baseName = baseName.substring(0, baseName.lastIndexOf("."));
    }

    const isWhitelisted = whitelist.indexOf(baseName) !== -1;
    const isBlacklisted = blacklist.indexOf(baseName) !== -1;

    if (whitelist.length === 0 && blacklist.length === 0) {
      return false;
    }

    if (whitelist.length && blacklist.length === 0) {
      return !isWhitelisted;
    }

    return isBlacklisted;
  },

  _hasSass() {
    return !!this.app.project.findAddonByName("ember-cli-sass");
  },

  _getUikitPath() {
    return path.dirname(
      /* eslint-disable n/no-extraneous-require */
      require("resolve").sync("uikit/package.json", {
        basedir: this.project.root,
      })
    );
  },

  _getIconsPath() {
    return path.join(this._getUikitPath(), "src", "images", "icons");
  },

  _getAssetsPath() {
    return path.join(this._getUikitPath(), "src", "images", "components");
  },

  _getStylesPath() {
    const uikitPath = this._getUikitPath();

    if (this._hasSass()) {
      return path.join(uikitPath, "src", "scss");
    }

    return path.join(uikitPath, "dist", "css");
  },
};
