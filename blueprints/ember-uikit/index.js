/* eslint-env node */

const fs = require("fs");
const path = require("path");

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    const stylePath = path.join("app", "styles");
    const file = path.join(stylePath, "app.scss");
    const importStatement = '@import "ember-uikit";';

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(file)) {
      this.insertIntoFile(file, `\n${importStatement}`, {});
    } else {
      fs.writeFileSync(file, importStatement);
    }

    this.ui.writeLine("add import statement", file);

    return this.addAddonToProject("ember-cli-sass");
  },
};
