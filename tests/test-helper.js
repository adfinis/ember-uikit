import { setApplication } from "@ember/test-helpers";
import Application from "dummy/app";
import config from "dummy/config/environment";
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from "ember-cli-code-coverage/test-support";
import { start, setupEmberOnerrorValidation } from "ember-qunit";
import { loadTests } from "ember-qunit/test-loader";
import * as QUnit from "qunit";
import { setup } from "qunit-dom";

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupEmberOnerrorValidation();
loadTests();
start();

QUnit.done(async function () {
  forceModulesToBeLoaded();
  await sendCoverage();
});
