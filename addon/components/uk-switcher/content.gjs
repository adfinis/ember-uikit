import { hash } from "@ember/helper";

import UkSwitcherContentItem from "ember-uikit/components/uk-switcher/content/item";

<template>
  <ul class="uk-switcher" id={{@contentId}} ...attributes>
    {{yield (hash item=(component UkSwitcherContentItem))}}
  </ul>
</template>
