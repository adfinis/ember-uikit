# Migration to v5

## Removed support for Ember < v3.24

`ember-uikit` v5 removed guaranteed support for all versions of Ember below
version 3.24 LTS. It may still work, but there are no tests for it.

## ember-auto-import v2

This package now uses `ember-auto-import` v2 which means the host app must use
`ember-auto-import` v2 as well. Check the [migration
guide](https://github.com/ef4/ember-auto-import/blob/main/docs/upgrade-guide-2.0.md)
for further instructions.

## Removed positional params

- `UkIcon` now needs an argument `@icon`
- `UkWidth` now needs an argument `@width`

## Renamed all actions to camelcase

All actions consumed by `ember-uikit` that were previously dasherized now need
to be camelized.

**Before:**

```hbs
<UkButton @on-click={{this.click}} />
```

**After:**

```hbs
<UkButton @onClick={{this.click}} />
```

This concerns the following components:

- `UkButton`
  - `on-click` => `onClick`
- `UkModal`
  - `on-hide` => `onHide`
  - `on-show` => `onShow`
- `UkSortable`
  - `on-start` => `onStart`
  - `on-stop` => `onStop`
  - `on-moved` => `onMoved`
  - `on-added` => `onAdded`
  - `on-removed` => `onRemoved`
- `UkSwitcher`
  - `on-beforeshow` => `onBeforeShow`
  - `on-show` => `onShow`
  - `on-shown` => `onShown`
  - `on-beforehide` => `onBeforeHide`
  - `on-hide` => `onHide`
  - `on-hidden` => `onHidden`
- `UkToggleSwitch`
  - `on-toggle` => `onToggle`

## Removed two-way binding for `UkToggleSwitch`

The `UkToggleSwitch` component doesn't support two-way binding anymore. Instead,
the host app needs to pass an `onToggle` action to the component.

**Before:**

```hbs
<UkToggleSwitch @value={{this.value}} />
```

**After:**

```hbs
<UkToggleSwitch @value={{this.value}} @onToggle={{fn (mut this.value)}} />
```

## Removed `link-item` yields of `UkTab` and `UkSubnav`

Since extending from built-in components is not supported anymore, we removed
the yielded `link-item` components of `UkTab` and `UkSubnav` and added the
possibility of passing a `@href` argument.

**Before:**

```hbs
<UkTab as |tab|>
  {{#tab.link-item "my-route.subroute" model=1 query=(hash foo="bar")}}
    Link
  {{/tab.link-item}}
</UkTab>
```

**After:**

```hbs
<UkTab as |tab|>
  <tab.link @href="/my-route/subroute/1?foo=bar">Link</tab.link>
</UkTab>
```
