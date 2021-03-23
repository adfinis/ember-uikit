import Component from "@ember/component";
import { alias } from "@ember/object/computed";
import FlexMixin from "ember-uikit/mixins/flex";

import layout from "../templates/components/uk-flex";

export default Component.extend(FlexMixin, {
  layout,

  flex: true,

  inline: alias("flexInline"),
  vertical: alias("flexVertical"),
  horizontal: alias("flexHorizontal"),
  direction: alias("flexDirection"),
  wrap: alias("flexWrap"),
  wrapAlignment: alias("flexWrapAlignment"),
});
