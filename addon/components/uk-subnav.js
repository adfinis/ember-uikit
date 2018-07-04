import Component from "@ember/component";
import layout from "../templates/components/uk-subnav";
import FlexMixin from "ember-uikit/mixins/flex";

export default Component.extend(FlexMixin, {
  layout,

  tagName: "ul",

  classNames: ["uk-subnav"],

  classNameBindings: ["divider:uk-subnav-divider", "pill:uk-subnav-pill"],

  divider: false,

  pill: false
});
