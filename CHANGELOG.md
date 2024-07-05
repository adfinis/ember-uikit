## [9.1.2](https://github.com/adfinis/ember-uikit/compare/v9.1.1...v9.1.2) (2024-07-05)


### Bug Fixes

* **deps:** update dependencies ([782386e](https://github.com/adfinis/ember-uikit/commit/782386e27cd98263e34f675154d6104863939eb4))

## [9.1.1](https://github.com/adfinis/ember-uikit/compare/v9.1.0...v9.1.1) (2024-03-19)


### Bug Fixes

* **linked-item:** fix active state for hash routing ([1997e0a](https://github.com/adfinis/ember-uikit/commit/1997e0afcad869c95799517aaa3a2e52f61e28e3))

# [9.1.0](https://github.com/adfinis/ember-uikit/compare/v9.0.1...v9.1.0) (2024-03-18)


### Features

* **ember:** officially support ember v5 ([c69ba5d](https://github.com/adfinis/ember-uikit/commit/c69ba5d0e6b2579af9a5d8cb428f6e38e5fdf106))

## [9.0.1](https://github.com/adfinis/ember-uikit/compare/v9.0.0...v9.0.1) (2024-03-13)


### Bug Fixes

* **deps:** update dependencies ([844c1d5](https://github.com/adfinis/ember-uikit/commit/844c1d50a03bbc7ce1f47edbf64702e42e5d3027))
* **modal-demo:** button alignment ([#1144](https://github.com/adfinis/ember-uikit/issues/1144)) ([1b4861c](https://github.com/adfinis/ember-uikit/commit/1b4861cbb713fd607edbc5d05d36b4bfc5f1219e))

# [9.0.0](https://github.com/adfinis/ember-uikit/compare/v8.0.0...v9.0.0) (2023-10-03)


### chore

* **deps:** update dependencies ([67131b4](https://github.com/adfinis/ember-uikit/commit/67131b49d8e5241a3bc22e262ca2e8e1c7415492))


### Features

* **linked-item:** add current when argument for tab and subnav items ([b4557b0](https://github.com/adfinis/ember-uikit/commit/b4557b0a11eead1689d2b0a17a9cd33da206298b))


### BREAKING CHANGES

* **deps:** Removed support for Node.js v14.

# [8.0.0](https://github.com/adfinis/ember-uikit/compare/v7.0.3...v8.0.0) (2023-05-01)


### Bug Fixes

* **modal:** make sure modal container is the same as UIkit container ([12caffe](https://github.com/adfinis/ember-uikit/commit/12caffe74eb311d508681c2ed3e54bdcbfa3e4a4))


### chore

* **deps:** update dependencies ([01d44b0](https://github.com/adfinis/ember-uikit/commit/01d44b01ffa5167064dd13eb0a6b22793e4dc63f))


### BREAKING CHANGES

* **deps:** Remove support for Ember.js v3.

## [7.0.3](https://github.com/adfinis/ember-uikit/compare/v7.0.2...v7.0.3) (2023-04-18)


### Bug Fixes

* **build:** generate app tree before merging ([dddec06](https://github.com/adfinis/ember-uikit/commit/dddec067520422a5c0cefb9b0217abc49cbcfc7c)), closes [#1048](https://github.com/adfinis/ember-uikit/issues/1048)

## [7.0.2](https://github.com/adfinis/ember-uikit/compare/v7.0.1...v7.0.2) (2023-04-17)


### Bug Fixes

* **build:** make sure to call the super functions on treeFor methods ([015ce0b](https://github.com/adfinis/ember-uikit/commit/015ce0b7a4bbdf68ce7482e67fb0a70a9fe3b7c1))

## [7.0.1](https://github.com/adfinis/ember-uikit/compare/v7.0.0...v7.0.1) (2023-03-31)


### Bug Fixes

* **build:** fix disabling icons in combination with whitelist ([4b2406c](https://github.com/adfinis/ember-uikit/commit/4b2406c2d48909669c703a337489d93f0c6c1948)), closes [#664](https://github.com/adfinis/ember-uikit/issues/664)
* **build:** make sure coverage plugin is only loaded in addon tests ([3b294eb](https://github.com/adfinis/ember-uikit/commit/3b294eb37d1b1f382163865e0cc6eceda83ffad4))
* make sure needed dependencies are installed in the host app ([ce5c0dc](https://github.com/adfinis/ember-uikit/commit/ce5c0dcd74bb24154f6a68e4900a6ab14cb6f7f1)), closes [#963](https://github.com/adfinis/ember-uikit/issues/963)

# [7.0.0](https://github.com/adfinis/ember-uikit/compare/v6.1.1...v7.0.0) (2023-03-28)


### Bug Fixes

* **modal:** remove non existant cls-panel option ([#1014](https://github.com/adfinis/ember-uikit/issues/1014)) ([d3252e5](https://github.com/adfinis/ember-uikit/commit/d3252e56f768d2b22f13dba6586a307ebe7b008b))


### chore

* **deps:** update dependencies ([8df899f](https://github.com/adfinis/ember-uikit/commit/8df899fc9d06e825285a87fcb37d5bb6ad586b93))


### Features

* added danger color to uk-button ([00159e9](https://github.com/adfinis/ember-uikit/commit/00159e9c4f21d43993cdae2a2f89758d6f84aae6))


### BREAKING CHANGES

* **deps:** Remove support for deprecated Ember LTS 3.24.

## [6.1.1](https://github.com/adfinis/ember-uikit/compare/v6.1.0...v6.1.1) (2022-11-02)


### Bug Fixes

* **color:** fix default colors for uk-toggle-switch and uk-label ([b3c4c33](https://github.com/adfinis/ember-uikit/commit/b3c4c33b155c0d1dd27d98a19b245266451ab7fa))

# [6.1.0](https://github.com/adfinis/ember-uikit/compare/v6.0.0...v6.1.0) (2022-09-13)


### Bug Fixes

* **modifiers:** ensure modifier compatibility with the new modifier API ([54aaed0](https://github.com/adfinis/ember-uikit/commit/54aaed0fd67c28b162608722f7ce1b3f6c7dcc89))


### Features

* **modal:** convert modal logic to modifier ([84f83cd](https://github.com/adfinis/ember-uikit/commit/84f83cd04d9e3b019d4e50645dcf82607968cc95))

# [6.0.0](https://github.com/adfinis/ember-uikit/compare/v5.1.3...v6.0.0) (2022-08-29)


### chore

* **deps:** update ember to v4.6.0 ([7b0ffa3](https://github.com/adfinis/ember-uikit/commit/7b0ffa320f861fd8c99c776667d524e72871b8f3))


### Features

* **modifiers:** add modifier for uk-tooltip ([f6d3cac](https://github.com/adfinis/ember-uikit/commit/f6d3cacad661bd1c53b597e9f42805db386f372d))


### BREAKING CHANGES

* **deps:** Drop support for node v12.

## [5.1.3](https://github.com/adfinis/ember-uikit/compare/v5.1.2...v5.1.3) (2022-05-06)

### Bug Fixes

- **engine:** add engine compatibility for the global container ([a3562b0](https://github.com/adfinis/ember-uikit/commit/a3562b04fcc0691fd89dad33a0362297d954b9fd))

### Reverts

- Revert "fix(confirm): add modal service with configuration options" ([d151396](https://github.com/adfinis/ember-uikit/commit/d15139667e8b94fafabffafad85f9da820667379))

## [5.1.2](https://github.com/adfinis/ember-uikit/compare/v5.1.1...v5.1.2) (2022-05-03)

### Bug Fixes

- **blueprint:** fix blueprint ([91ed54a](https://github.com/adfinis/ember-uikit/commit/91ed54a5ed020d83d385f3e74d23553a9c12cc19))
- **confirm:** add modal service with configuration options ([76ed01b](https://github.com/adfinis/ember-uikit/commit/76ed01b940729e089909c47c808cf1f08af33843))

## [5.1.1](https://github.com/adfinis/ember-uikit/compare/v5.1.0...v5.1.1) (2022-03-22)

### Bug Fixes

- **embroider:** add missing dependency to @ember/string ([e58cbe5](https://github.com/adfinis/ember-uikit/commit/e58cbe5f59c2cf1ec26528bd3e67c669edfc56bd))

# [5.1.0](https://github.com/adfinis/ember-uikit/compare/v5.0.0...v5.1.0) (2022-03-08)

### Features

- **utilities:** add confirm utility ([5a97683](https://github.com/adfinis/ember-uikit/commit/5a97683f66951b91464d9a68942221b2f78ba982))

# [5.0.0](https://github.com/adfinis/ember-uikit/compare/v4.0.0...v5.0.0) (2022-02-04)

### Bug Fixes

- **badge:** add missing attributes ([f0db119](https://github.com/adfinis/ember-uikit/commit/f0db1193e41cbbd5349fcdb35745c6167ab1de84))
- **config:** remove usage of ember-get-config ([fcddb14](https://github.com/adfinis/ember-uikit/commit/fcddb14ed71d338e4849c880c34fd47516ffc1f0))
- **linked-item:** fix order of dynamic segments ([c917428](https://github.com/adfinis/ember-uikit/commit/c917428bbc6ba0e2179e8840bd60c8521cf387f0))
- **linked-item:** handle rootURLs and hash locations ([0ffe74f](https://github.com/adfinis/ember-uikit/commit/0ffe74fc17761f8f6fa0a003629f53d117ae5056))
- **linked-items:** add href to linked tab and subnav items ([5340369](https://github.com/adfinis/ember-uikit/commit/5340369405a87977dfda98035aed731cf3cd457a))
- **linked-items:** don't transition to index route ([8461794](https://github.com/adfinis/ember-uikit/commit/84617948853b3f2b99ddb2425ed6e2be6009b0de))
- **linked-items:** use named dynamic segments ([1d7a8db](https://github.com/adfinis/ember-uikit/commit/1d7a8db21be00d9fe6b5d67f736f2df505c58d86))
- **notification:** fix notification options if app doesn't configure anything ([2bd9f42](https://github.com/adfinis/ember-uikit/commit/2bd9f42b81c89cfa8a709517a9b7375794dbe6e6))

### Features

- **linked-item:** add option to link to index route of passed href ([450e24f](https://github.com/adfinis/ember-uikit/commit/450e24f3e581e0e8c57ee5c76ba953e49cfad277))
- **linked-item:** support engines using ember-engines-router-service ([ab39acf](https://github.com/adfinis/ember-uikit/commit/ab39acf26526abf8f166a422187addf9aebb5aa9))
- **linked-item:** yield active state of item component ([b28d06a](https://github.com/adfinis/ember-uikit/commit/b28d06a540acb15c45d83751a1d3687bfbb5829b))
- refactor all component to ember v4 ([1f1307c](https://github.com/adfinis/ember-uikit/commit/1f1307c9ebbea9660b7c92a74517b8f0050c4e70))

### BREAKING CHANGES

- This version drops support for Ember < v3.24 and requires `ember-auto-import` v2. Please check [the migration guide](/docs/migration-v5.md) for further instructions.

# [5.0.0-beta.11](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.10...v5.0.0-beta.11) (2022-02-02)

### Features

- **linked-item:** add option to link to index route of passed href ([450e24f](https://github.com/adfinis/ember-uikit/commit/450e24f3e581e0e8c57ee5c76ba953e49cfad277))

# [5.0.0-beta.10](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.9...v5.0.0-beta.10) (2022-02-02)

### Bug Fixes

- **linked-items:** don't transition to index route ([8461794](https://github.com/adfinis/ember-uikit/commit/84617948853b3f2b99ddb2425ed6e2be6009b0de))

# [5.0.0-beta.9](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.8...v5.0.0-beta.9) (2022-01-31)

### Bug Fixes

- **linked-item:** fix order of dynamic segments ([c917428](https://github.com/adfinis/ember-uikit/commit/c917428bbc6ba0e2179e8840bd60c8521cf387f0))

# [5.0.0-beta.8](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.7...v5.0.0-beta.8) (2022-01-31)

### Bug Fixes

- **linked-items:** use named dynamic segments ([1d7a8db](https://github.com/adfinis/ember-uikit/commit/1d7a8db21be00d9fe6b5d67f736f2df505c58d86))

# [5.0.0-beta.7](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.6...v5.0.0-beta.7) (2022-01-25)

### Bug Fixes

- **linked-item:** handle rootURLs and hash locations ([0ffe74f](https://github.com/adfinis/ember-uikit/commit/0ffe74fc17761f8f6fa0a003629f53d117ae5056))

# [5.0.0-beta.6](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.5...v5.0.0-beta.6) (2022-01-25)

### Features

- **linked-item:** support engines using ember-engines-router-service ([ab39acf](https://github.com/adfinis/ember-uikit/commit/ab39acf26526abf8f166a422187addf9aebb5aa9))

# [5.0.0-beta.5](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.4...v5.0.0-beta.5) (2022-01-24)

### Features

- **linked-item:** yield active state of item component ([b28d06a](https://github.com/adfinis/ember-uikit/commit/b28d06a540acb15c45d83751a1d3687bfbb5829b))

# [5.0.0-beta.4](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2022-01-24)

### Bug Fixes

- **linked-items:** add href to linked tab and subnav items ([5340369](https://github.com/adfinis/ember-uikit/commit/5340369405a87977dfda98035aed731cf3cd457a))

# [5.0.0-beta.3](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.2...v5.0.0-beta.3) (2022-01-20)

### Bug Fixes

- **badge:** add missing attributes ([f0db119](https://github.com/adfinis/ember-uikit/commit/f0db1193e41cbbd5349fcdb35745c6167ab1de84))

# [5.0.0-beta.2](https://github.com/adfinis/ember-uikit/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2022-01-20)

### Bug Fixes

- **notification:** fix notification options if app doesn't configure anything ([2bd9f42](https://github.com/adfinis/ember-uikit/commit/2bd9f42b81c89cfa8a709517a9b7375794dbe6e6))

# [5.0.0-beta.1](https://github.com/adfinis/ember-uikit/compare/v4.0.0...v5.0.0-beta.1) (2022-01-20)

### Features

- refactor all component to ember v4 ([1f1307c](https://github.com/adfinis/ember-uikit/commit/1f1307c9ebbea9660b7c92a74517b8f0050c4e70))

### BREAKING CHANGES

- This version drops support for Ember < v3.24 and requires `ember-auto-import` v2. Please check [the migration guide](https://github.com/adfinis/ember-uikit/blob/main/docs/migration-v5.md) for further instructions.

# [4.0.0](https://github.com/adfinis/ember-uikit/compare/v3.0.2...v4.0.0) (2021-08-03)

- chore!: drop node 10 support (#746) ([e2e8e58](https://github.com/adfinis/ember-uikit/commit/e2e8e5858fb69e1c217cc83ae3285c69020d56e5)), closes [#746](https://github.com/adfinis/ember-uikit/issues/746)

### Features

- **switcher:** add active component option ([39c2e36](https://github.com/adfinis/ember-uikit/commit/39c2e3682e9189f1c44452b5f1271816ee11359f))

### BREAKING CHANGES

- Dropping support for node 10 as it's reached EOL.

Co-authored-by: Akanksh Saxena <akanksh.saxena@adfinis.com>

## [3.0.2](https://github.com/adfinis/ember-uikit/compare/v3.0.1...v3.0.2) (2021-03-24)

### Bug Fixes

- **modal:** use the container param as query string if passed as such ([4ca5b59](https://github.com/adfinis/ember-uikit/commit/4ca5b591cafa2628fe22874a797c5a9f1d41e6ac))

## [3.0.1](https://github.com/adfinis/ember-uikit/compare/v3.0.0...v3.0.1) (2021-03-24)

### Bug Fixes

- use prepare instead of postinstall lifecycle ([fbf1102](https://github.com/adfinis/ember-uikit/commit/fbf1102556f2fc992927c0f72a04409eb40d3019))

# [3.0.0](https://github.com/adfinis/ember-uikit/compare/v2.2.2...v3.0.0) (2021-03-23)

- chore(ember)!: remove support for ember LTS 3.16 ([0f652ac](https://github.com/adfinis/ember-uikit/commit/0f652ac4ee0da056d87914262befb1b78d8cc031))

### BREAKING CHANGES

- This removes guaranteed support for ember LTS version
  3.16 since it's not active anymore and adds testing with the active LTS 3.24.

## [2.2.2](https://github.com/adfinis/ember-uikit/compare/v2.2.1...v2.2.2) (2020-11-20)

### Bug Fixes

- **modal:** fix scrolling to top when modal exists ([5291beb](https://github.com/adfinis/ember-uikit/commit/5291beb9d4050b989abc12a6a44b05c9fce6d50d))

## [2.2.1](https://github.com/adfinis/ember-uikit/compare/v2.2.0...v2.2.1) (2020-11-20)

### Bug Fixes

- remove deprecated usage of private helper and use ember-cli-uglify ([#562](https://github.com/adfinis/ember-uikit/issues/562)) ([bba51c6](https://github.com/adfinis/ember-uikit/commit/bba51c62c778744cc9af4e3e0b48ccce329d95f1))

# [2.2.0](https://github.com/adfinis/ember-uikit/compare/v2.1.2...v2.2.0) (2020-10-12)

### Features

- update to ember 3.22 ([#523](https://github.com/adfinis/ember-uikit/issues/523)) ([e6f8240](https://github.com/adfinis/ember-uikit/commit/e6f82405f0ec8b87dabe211f0fba18ef8fc87bdc))

## [2.1.2](https://github.com/adfinis/ember-uikit/compare/v2.1.1...v2.1.2) (2020-03-25)

### Bug Fixes

- **modal:** fix initial focus of modal focus trap ([f57381d](https://github.com/adfinis/ember-uikit/commit/f57381d14542ab07a2fd9519993d04d2faf1a959))

## [2.1.1](https://github.com/adfinis/ember-uikit/compare/v2.1.0...v2.1.1) (2020-03-24)

### Bug Fixes

- **deps:** move focus-trap to dependencies ([636a681](https://github.com/adfinis/ember-uikit/commit/636a68107b681241f4d9ad74f20df1dea7e93eec))
- **deps:** update ember to 3.16.5 ([02b5d65](https://github.com/adfinis/ember-uikit/commit/02b5d650539326133a0b38d163648f6a58bb0349))

# [2.1.0](https://github.com/adfinis/ember-uikit/compare/v2.0.1...v2.1.0) (2020-03-19)

### Bug Fixes

- **modal:** ignore bubbling events ([fe6b593](https://github.com/adfinis/ember-uikit/commit/fe6b593a10409ed6ea67b97dda201e2b95e777c7))

### Features

- **modal:** trap focus in opened modal ([0393967](https://github.com/adfinis/ember-uikit/commit/0393967614f1ffcab9d06b7549067c1f4d62ec50))

## [2.0.1](https://github.com/adfinis/ember-uikit/compare/v2.0.0...v2.0.1) (2019-12-04)

### Bug Fixes

- **modal:** fix modal event handling and tests ([#311](https://github.com/adfinis/ember-uikit/issues/311)) ([c7f8156](https://github.com/adfinis/ember-uikit/commit/c7f815655fbaf3ff907b1da6797b2fa543bb945a))

# [2.0.0](https://github.com/adfinis/ember-uikit/compare/v1.0.0...v2.0.0) (2019-12-02)

### Features

- **modal:** change to a composable component ([#307](https://github.com/adfinis/ember-uikit/issues/307)) ([ee42813](https://github.com/adfinis/ember-uikit/commit/ee42813f7717bd2762da376a4c81bafee5abbbbe))

### BREAKING CHANGES

- **modal:** This removes the default stying of "uk-modal-body", to
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

# [1.0.0](https://github.com/adfinis/ember-uikit/compare/v0.9.0...v1.0.0) (2019-11-18)

### Bug Fixes

- **deps:** update dependency broccoli-stew to v3 ([0e8399c](https://github.com/adfinis/ember-uikit/commit/0e8399c9dae3a2f3a1abbcda27ff5d7fb180ae30))
- **deps:** update dependency ember-auto-import to v1.4.1 ([cf6f84a](https://github.com/adfinis/ember-uikit/commit/cf6f84af8f1ba86603c8a457c27d7aab08775fec))
- **deps:** update dependency ember-auto-import to v1.5.2 ([ed75c5a](https://github.com/adfinis/ember-uikit/commit/ed75c5a92163ed650c2ce4ee5be100dfdf3a5404))
- **deps:** update dependency ember-toggle to v5.3.3 ([9c45df0](https://github.com/adfinis/ember-uikit/commit/9c45df0070dedb4a5c21a9faa25148484e6398c5))
- **deps:** update dependency uikit to v3.1.6 ([2c4ebd6](https://github.com/adfinis/ember-uikit/commit/2c4ebd6b64e15dc1cb1efdbef1b0f199be0a131c))
- **deps:** update dependency uikit to v3.1.7 ([4fde8c1](https://github.com/adfinis/ember-uikit/commit/4fde8c1535da11ec4ff58396c11bce98cce5d9d1))
- **modal:** escape close left invisible layer over page ([4653783](https://github.com/adfinis/ember-uikit/commit/4653783353587ca218397cb89474d2b2dea95955))
- **modal:** fix modal event handling and add some tests ([916b68b](https://github.com/adfinis/ember-uikit/commit/916b68bee671793a7b1bc0915b03ebda2dab029f))

### chore

- remove support for ember 3.4 ([cacbd22](https://github.com/adfinis/ember-uikit/commit/cacbd22ce5244d0ccc182fabdbbe360e497d8fcf))

### Features

- **uk-switcher:** add uikit events for the switcher component ([641bdaf](https://github.com/adfinis/ember-uikit/commit/641bdafa75fd6f634902fd9716a879554af1321e))

### BREAKING CHANGES

- This removes support for ember 3.4 which is not a
  supported LTS version anymore. This also adds a test matrix for the
  latest LTS version 3.12

# [0.9.0](https://github.com/adfinis/ember-uikit/compare/v0.8.2...v0.9.0) (2019-09-25)

### Bug Fixes

- **deps:** update dependency broccoli-stew to v3 ([ffe911f](https://github.com/adfinis/ember-uikit/commit/ffe911f))
- **deps:** update dependency ember-auto-import to v1.4.1 ([f5c5eb7](https://github.com/adfinis/ember-uikit/commit/f5c5eb7))
- **deps:** update dependency ember-auto-import to v1.5.2 ([ef9e943](https://github.com/adfinis/ember-uikit/commit/ef9e943))
- **deps:** update dependency ember-toggle to v5.3.3 ([001904f](https://github.com/adfinis/ember-uikit/commit/001904f))
- **deps:** update dependency uikit to v3.1.6 ([f58e597](https://github.com/adfinis/ember-uikit/commit/f58e597))
- **deps:** update dependency uikit to v3.1.7 ([09977cc](https://github.com/adfinis/ember-uikit/commit/09977cc))
- **modal:** escape close left invisible layer over page ([96aa259](https://github.com/adfinis/ember-uikit/commit/96aa259))

### Features

- **uk-switcher:** add uikit events for the switcher component ([6561c12](https://github.com/adfinis/ember-uikit/commit/6561c12))

## [0.8.2](https://github.com/adfinis/ember-uikit/compare/v0.8.1...v0.8.2) (2019-06-11)

### Bug Fixes

- **deps:** update dependencies and drop ember-cli-eslint ([1a6023d](https://github.com/adfinis/ember-uikit/commit/1a6023d))
- **deps:** update ember source ([3d293ba](https://github.com/adfinis/ember-uikit/commit/3d293ba))
- **modal:** add DDAU for modal visibility ([#140](https://github.com/adfinis/ember-uikit/issues/140)) ([6a3ddef](https://github.com/adfinis/ember-uikit/commit/6a3ddef))
- **notification:** wrong property in snippet ([f925d47](https://github.com/adfinis/ember-uikit/commit/f925d47))
- **syntax:** use the new template syntax ([142aa3a](https://github.com/adfinis/ember-uikit/commit/142aa3a))
- **tests:** fix wrong attribute in uk-toggle-switch test ([73be406](https://github.com/adfinis/ember-uikit/commit/73be406))

## [0.8.1](https://github.com/adfinis/ember-uikit/compare/v0.8.0...v0.8.1) (2019-05-09)

### Bug Fixes

- **modal:** reintroduce option for close button ([8a719e9](https://github.com/adfinis/ember-uikit/commit/8a719e9))

## [0.8.0](https://github.com/adfinis/ember-uikit/compare/v0.7.3...v0.8.0) (2019-05-08)

### Bug Fixes

- enable semantic release ([6a0e67a](https://github.com/adfinis/ember-uikit/commit/6a0e67a))
- **docs:** correct usage of `mut` helper ([79096bc](https://github.com/adfinis/ember-uikit/commit/79096bc))
- **renovate:** use shared config ([7117811](https://github.com/adfinis/ember-uikit/commit/7117811))

### Features

- **modal:** expose all options ([5877dd4](https://github.com/adfinis/ember-uikit/commit/5877dd4))

## [0.7.3](https://github.com/adfinis/ember-uikit/compare/v0.7.2...v0.7.3) - (2019-03-11)

### Added

- Simple `modal` component

### Changed

- Update dependencies

## [0.7.2](https://github.com/adfinis/ember-uikit/compare/v0.7.1...v0.7.2) (2019-01-17)

### Changed

- Update dependencies

## [0.7.1](https://github.com/adfinis/ember-uikit/compare/v0.7.0...v0.7.1) (2018-09-05)

### Changed

- Minor style improvements of `uk-toggle-switch`

## [0.7.0](https://github.com/adfinis/ember-uikit/compare/v0.6.0...v0.7.0) (2018-09-05)

### Added

- `uk-toggle-switch` component

### Changed

- Updated various dependencies

## [0.6.0](https://github.com/adfinis/ember-uikit/compare/v0.5.1...v0.6.0) (2018-08-17)

### Added

- `notification` service

### Fixed

- Various documentation issues

### Changed

- Updated ember to 3.3.x
- Updated various dependencies
- Remove mocha as testing framework in favor of QUnit

## [0.5.1](https://github.com/adfinis/ember-uikit/compare/v0.5.0...v0.5.1) (2018-03-29)

### Added

- `ratio` property on `uk-spinner`

## [0.5.0](https://github.com/adfinis/ember-uikit/compare/v0.4.1...v0.5.0) (2018-02-22)

### Added

- `uk-sortable`
- Shim for importing `UIkit` as module

### Changed

- Update to ember v3.0.0
- Update dependencies
- Remove support for node v4

## [0.4.1](https://github.com/adfinis/ember-uikit/compare/v0.4.0...v0.4.1) (2018-01-25)

### Fixed

- Remove deprecated usage of `project.nodeModulesPath`
- Add `--no-sandbox` flag to chrome when testing in CI

### Changed

- Update dependencies

## [0.4.0](https://github.com/adfinis/ember-uikit/compare/v0.3.2...v0.4.0) (2017-12-06)

### Added

- `uk-badge`

### Changed

- Disable warnings in testing
- Update ember and ember-cli

## [0.3.2](https://github.com/adfinis/ember-uikit/compare/v0.3.1...v0.3.2) (2017-12-06)

### Fixed

- Execution of UIkit's javascript code

## [0.3.1](https://github.com/adfinis/ember-uikit/compare/v0.3.0...v0.3.1) (2017-12-06)

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

## [0.3.0](https://github.com/adfinis/ember-uikit/compare/v0.2.0...v0.3.0) (2017-11-29)

### Added

- `uk-flex`
- `uk-width`
- `uk-label`
- Flex utility on `uk-subnav`

## [0.2.0](https://github.com/adfinis/ember-uikit/compare/v0.1.3...v0.2.0) (2017-11-28)

### Added

- `uk-tab`
- `uk-subnav`
- `uk-switcher`

### Changed

- Better validation and warnings
- Better documentation

## [0.1.3](https://github.com/adfinis/ember-uikit/compare/v0.1.2...v0.1.3) (2017-11-24)

### Fixed

- Automatic demo page deploy on tags

## [0.1.2](https://github.com/adfinis/ember-uikit/compare/v0.1.1...v0.1.2) (2017-11-24)

### Fixed

- `package.json` metadata

## [0.1.1](https://github.com/adfinis/ember-uikit/compare/v0.1.0...v0.1.1) (2017-11-24)

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
