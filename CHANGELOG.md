## [3.0.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v3.0.0...v3.0.1) (2021-03-24)


### Bug Fixes

* use prepare instead of postinstall lifecycle ([fbf1102](https://github.com/adfinis-sygroup/ember-uikit/commit/fbf1102556f2fc992927c0f72a04409eb40d3019))

# [3.0.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.2.2...v3.0.0) (2021-03-23)


* chore(ember)!: remove support for ember LTS 3.16 ([0f652ac](https://github.com/adfinis-sygroup/ember-uikit/commit/0f652ac4ee0da056d87914262befb1b78d8cc031))


### BREAKING CHANGES

* This removes guaranteed support for ember LTS version
3.16 since it's not active anymore and adds testing with the active LTS 3.24.

## [2.2.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.2.1...v2.2.2) (2020-11-20)


### Bug Fixes

* **modal:** fix scrolling to top when modal exists ([5291beb](https://github.com/adfinis-sygroup/ember-uikit/commit/5291beb9d4050b989abc12a6a44b05c9fce6d50d))

## [2.2.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.2.0...v2.2.1) (2020-11-20)


### Bug Fixes

* remove deprecated usage of private helper and use ember-cli-uglify ([#562](https://github.com/adfinis-sygroup/ember-uikit/issues/562)) ([bba51c6](https://github.com/adfinis-sygroup/ember-uikit/commit/bba51c62c778744cc9af4e3e0b48ccce329d95f1))

# [2.2.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.1.2...v2.2.0) (2020-10-12)


### Features

* update to ember 3.22 ([#523](https://github.com/adfinis-sygroup/ember-uikit/issues/523)) ([e6f8240](https://github.com/adfinis-sygroup/ember-uikit/commit/e6f82405f0ec8b87dabe211f0fba18ef8fc87bdc))

## [2.1.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.1.1...v2.1.2) (2020-03-25)


### Bug Fixes

* **modal:** fix initial focus of modal focus trap ([f57381d](https://github.com/adfinis-sygroup/ember-uikit/commit/f57381d14542ab07a2fd9519993d04d2faf1a959))

## [2.1.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.1.0...v2.1.1) (2020-03-24)


### Bug Fixes

* **deps:** move focus-trap to dependencies ([636a681](https://github.com/adfinis-sygroup/ember-uikit/commit/636a68107b681241f4d9ad74f20df1dea7e93eec))
* **deps:** update ember to 3.16.5 ([02b5d65](https://github.com/adfinis-sygroup/ember-uikit/commit/02b5d650539326133a0b38d163648f6a58bb0349))

# [2.1.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.0.1...v2.1.0) (2020-03-19)


### Bug Fixes

* **modal:** ignore bubbling events ([fe6b593](https://github.com/adfinis-sygroup/ember-uikit/commit/fe6b593a10409ed6ea67b97dda201e2b95e777c7))


### Features

* **modal:** trap focus in opened modal ([0393967](https://github.com/adfinis-sygroup/ember-uikit/commit/0393967614f1ffcab9d06b7549067c1f4d62ec50))

## [2.0.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v2.0.0...v2.0.1) (2019-12-04)


### Bug Fixes

* **modal:** fix modal event handling and tests ([#311](https://github.com/adfinis-sygroup/ember-uikit/issues/311)) ([c7f8156](https://github.com/adfinis-sygroup/ember-uikit/commit/c7f815655fbaf3ff907b1da6797b2fa543bb945a))

# [2.0.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v1.0.0...v2.0.0) (2019-12-02)


### Features

* **modal:** change to a composable component ([#307](https://github.com/adfinis-sygroup/ember-uikit/issues/307)) ([ee42813](https://github.com/adfinis-sygroup/ember-uikit/commit/ee42813f7717bd2762da376a4c81bafee5abbbbe))


### BREAKING CHANGES

* **modal:** This removes the default stying of "uk-modal-body", to
migrate to this patch and keep the stying it will have to be changed from:
```hbs
{{#uk-modal}}
  Lorem ipsum
{{/uk-modal}}
```
to:
```hbs
{{#uk-modal as |modal|}}
  {{#modal.body}}
    Lorem ipsum
  {{/modal.body}}
{{/uk-modal}}
```
The footer can be migrated as follows:
```hbs
{{#uk-modal}}
  <p class="uk-text-right">
    Footer content
  </p>
{{/uk-modal}}
```
to:
```hbs
{{#uk-modal as |modal|}}
  {{#modal.footer class="uk-text-right"}}
    Footer content
  {{/modal.footer}}
{{/uk-modal}}
```

# [1.0.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.9.0...v1.0.0) (2019-11-18)


### Bug Fixes

* **deps:** update dependency broccoli-stew to v3 ([0e8399c](https://github.com/adfinis-sygroup/ember-uikit/commit/0e8399c9dae3a2f3a1abbcda27ff5d7fb180ae30))
* **deps:** update dependency ember-auto-import to v1.4.1 ([cf6f84a](https://github.com/adfinis-sygroup/ember-uikit/commit/cf6f84af8f1ba86603c8a457c27d7aab08775fec))
* **deps:** update dependency ember-auto-import to v1.5.2 ([ed75c5a](https://github.com/adfinis-sygroup/ember-uikit/commit/ed75c5a92163ed650c2ce4ee5be100dfdf3a5404))
* **deps:** update dependency ember-toggle to v5.3.3 ([9c45df0](https://github.com/adfinis-sygroup/ember-uikit/commit/9c45df0070dedb4a5c21a9faa25148484e6398c5))
* **deps:** update dependency uikit to v3.1.6 ([2c4ebd6](https://github.com/adfinis-sygroup/ember-uikit/commit/2c4ebd6b64e15dc1cb1efdbef1b0f199be0a131c))
* **deps:** update dependency uikit to v3.1.7 ([4fde8c1](https://github.com/adfinis-sygroup/ember-uikit/commit/4fde8c1535da11ec4ff58396c11bce98cce5d9d1))
* **modal:** escape close left invisible layer over page ([4653783](https://github.com/adfinis-sygroup/ember-uikit/commit/4653783353587ca218397cb89474d2b2dea95955))
* **modal:** fix modal event handling and add some tests ([916b68b](https://github.com/adfinis-sygroup/ember-uikit/commit/916b68bee671793a7b1bc0915b03ebda2dab029f))


### chore

* remove support for ember 3.4 ([cacbd22](https://github.com/adfinis-sygroup/ember-uikit/commit/cacbd22ce5244d0ccc182fabdbbe360e497d8fcf))


### Features

* **uk-switcher:** add uikit events for the switcher component ([641bdaf](https://github.com/adfinis-sygroup/ember-uikit/commit/641bdafa75fd6f634902fd9716a879554af1321e))


### BREAKING CHANGES

* This removes support for ember 3.4 which is not a
supported LTS version anymore. This also adds a test matrix for the
latest LTS version 3.12

# [0.9.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.8.2...v0.9.0) (2019-09-25)


### Bug Fixes

* **deps:** update dependency broccoli-stew to v3 ([ffe911f](https://github.com/adfinis-sygroup/ember-uikit/commit/ffe911f))
* **deps:** update dependency ember-auto-import to v1.4.1 ([f5c5eb7](https://github.com/adfinis-sygroup/ember-uikit/commit/f5c5eb7))
* **deps:** update dependency ember-auto-import to v1.5.2 ([ef9e943](https://github.com/adfinis-sygroup/ember-uikit/commit/ef9e943))
* **deps:** update dependency ember-toggle to v5.3.3 ([001904f](https://github.com/adfinis-sygroup/ember-uikit/commit/001904f))
* **deps:** update dependency uikit to v3.1.6 ([f58e597](https://github.com/adfinis-sygroup/ember-uikit/commit/f58e597))
* **deps:** update dependency uikit to v3.1.7 ([09977cc](https://github.com/adfinis-sygroup/ember-uikit/commit/09977cc))
* **modal:** escape close left invisible layer over page ([96aa259](https://github.com/adfinis-sygroup/ember-uikit/commit/96aa259))


### Features

* **uk-switcher:** add uikit events for the switcher component ([6561c12](https://github.com/adfinis-sygroup/ember-uikit/commit/6561c12))

## [0.8.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.8.1...v0.8.2) (2019-06-11)


### Bug Fixes

* **deps:** update dependencies and drop ember-cli-eslint ([1a6023d](https://github.com/adfinis-sygroup/ember-uikit/commit/1a6023d))
* **deps:** update ember source ([3d293ba](https://github.com/adfinis-sygroup/ember-uikit/commit/3d293ba))
* **modal:** add DDAU for modal visibility ([#140](https://github.com/adfinis-sygroup/ember-uikit/issues/140)) ([6a3ddef](https://github.com/adfinis-sygroup/ember-uikit/commit/6a3ddef))
* **notification:** wrong property in snippet ([f925d47](https://github.com/adfinis-sygroup/ember-uikit/commit/f925d47))
* **syntax:** use the new template syntax ([142aa3a](https://github.com/adfinis-sygroup/ember-uikit/commit/142aa3a))
* **tests:** fix wrong attribute in uk-toggle-switch test ([73be406](https://github.com/adfinis-sygroup/ember-uikit/commit/73be406))

## [0.8.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.8.0...v0.8.1) (2019-05-09)

### Bug Fixes

- **modal:** reintroduce option for close button ([8a719e9](https://github.com/adfinis-sygroup/ember-uikit/commit/8a719e9))

## [0.8.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.7.3...v0.8.0) (2019-05-08)

### Bug Fixes

- enable semantic release ([6a0e67a](https://github.com/adfinis-sygroup/ember-uikit/commit/6a0e67a))
- **docs:** correct usage of `mut` helper ([79096bc](https://github.com/adfinis-sygroup/ember-uikit/commit/79096bc))
- **renovate:** use shared config ([7117811](https://github.com/adfinis-sygroup/ember-uikit/commit/7117811))

### Features

- **modal:** expose all options ([5877dd4](https://github.com/adfinis-sygroup/ember-uikit/commit/5877dd4))

## [0.7.3](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.7.2...v0.7.3) - (2019-03-11)

### Added

- Simple `modal` component

### Changed

- Update dependencies

## [0.7.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.7.1...v0.7.2) (2019-01-17)

### Changed

- Update dependencies

## [0.7.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.7.0...v0.7.1) (2018-09-05)

### Changed

- Minor style improvements of `uk-toggle-switch`

## [0.7.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.6.0...v0.7.0) (2018-09-05)

### Added

- `uk-toggle-switch` component

### Changed

- Updated various dependencies

## [0.6.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.5.1...v0.6.0) (2018-08-17)

### Added

- `notification` service

### Fixed

- Various documentation issues

### Changed

- Updated ember to 3.3.x
- Updated various dependencies
- Remove mocha as testing framework in favor of QUnit

## [0.5.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.5.0...v0.5.1) (2018-03-29)

### Added

- `ratio` property on `uk-spinner`

## [0.5.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.4.1...v0.5.0) (2018-02-22)

### Added

- `uk-sortable`
- Shim for importing `UIkit` as module

### Changed

- Update to ember v3.0.0
- Update dependencies
- Remove support for node v4

## [0.4.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.4.0...v0.4.1) (2018-01-25)

### Fixed

- Remove deprecated usage of `project.nodeModulesPath`
- Add `--no-sandbox` flag to chrome when testing in CI

### Changed

- Update dependencies

## [0.4.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.3.2...v0.4.0) (2017-12-06)

### Added

- `uk-badge`

### Changed

- Disable warnings in testing
- Update ember and ember-cli

## [0.3.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.3.1...v0.3.2) (2017-12-06)

### Fixed

- Execution of UIkit's javascript code

## [0.3.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.3.0...v0.3.1) (2017-12-06)

### Added

- Options
  - `importUIkitCSS`
  - `importUIkitJS`
  - `importUIkitAssets`
  - `importUIkitIcons`
  - `useIcons`
  - `whitelist`
  - `blacklist`
- FastBoot compatibility

## [0.3.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.2.0...v0.3.0) (2017-11-29)

### Added

- `uk-flex`
- `uk-width`
- `uk-label`
- Flex utility on `uk-subnav`

## [0.2.0](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.1.3...v0.2.0) (2017-11-28)

### Added

- `uk-tab`
- `uk-subnav`
- `uk-switcher`

### Changed

- Better validation and warnings
- Better documentation

## [0.1.3](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.1.2...v0.1.3) (2017-11-24)

### Fixed

- Automatic demo page deploy on tags

## [0.1.2](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.1.1...v0.1.2) (2017-11-24)

### Fixed

- `package.json` metadata

## [0.1.1](https://github.com/adfinis-sygroup/ember-uikit/compare/v0.1.0...v0.1.1) (2017-11-24)

### Added

- Automatic demo page deploy

## 0.1.0 (2017-11-24)

### Added

- Demo page
- `uk-button`
- `uk-card`
- `uk-list`
- `uk-icon`
- `uk-spinner`
