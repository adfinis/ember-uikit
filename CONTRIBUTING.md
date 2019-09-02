# Contributing to ember-uikit

## Coding style

* **Commit messages** ember-uikit uses [semantic release](https://github.com/semantic-release/semantic-release) to automate the process of making new releases. That requires all commit messages to adhere to a specific format, namely [conventional commits](https://www.conventionalcommits.org/). The format of the commit messages is checked automaticaly during CI. 
* **Ember** ember-uikit uses the [ember](https://github.com/ember-cli/eslint-plugin-ember) coding style.
* **Prettier** Install prettier for automatic code formatting. This is also enforced by the CI.
* **Actions** Use closure actions. We prefer dasherized action names like `on-click` rather than `onClick`.

## CI and CD

Travis CI will take care of testing and deploying the demo app. You don't have to care about it.
