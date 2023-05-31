"use strict";

const { embroiderSafe, embroiderOptimized } = require("@embroider/test-setup");
const getChannelURL = require("ember-source-channel-url");

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: "ember-lts-4.4",
        npm: {
          devDependencies: {
            "ember-source": "~4.4.0",
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      {
        name: "ember-lts-4.8",
        npm: {
          devDependencies: {
            "ember-source": "~4.8.0",
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      {
        name: "ember-lts-4.12",
        npm: {
          devDependencies: {
            "ember-source": "~4.12.0",
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      {
        name: "ember-release",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("release"),
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      {
        name: "ember-beta",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("beta"),
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      {
        name: "ember-canary",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("canary"),
          },
        },
        env: {
          EMBROIDER_TEST_SETUP_FORCE: "classic",
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
