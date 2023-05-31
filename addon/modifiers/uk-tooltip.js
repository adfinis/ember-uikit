import { modifier } from "ember-modifier";
import UIkit from "uikit";

export default modifier(
  (element, [title], options) => {
    const tooltip = UIkit.tooltip(element, { title, ...options });

    return () => tooltip.$destroy();
  },
  { eager: false },
);
