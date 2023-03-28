import { setApplication } from "@ember/test-helpers";
import Application from "dummy/app";
import config from "dummy/config/environment";
import { start } from "ember-qunit";
import * as QUnit from "qunit";
import { setup } from "qunit-dom";
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from "ember-cli-code-coverage/test-support";

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

QUnit.done(async function () {
  forceModulesToBeLoaded();
  await sendCoverage();
});
