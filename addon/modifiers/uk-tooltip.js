import { modifier } from "ember-modifier";
import UIkit from "uikit";

export default modifier(function ukTooltip(element, [title], options) {
  const tooltip = UIkit.tooltip(element, { title, ...options });

  return () => tooltip.$destroy();
});
