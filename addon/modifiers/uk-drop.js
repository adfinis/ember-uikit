import { modifier } from "ember-modifier";
import UIkit from "uikit";

export default modifier(
  (element, _, options) => {
    const drop = UIkit.drop(element, { ...options });

    return () => drop.$destroy();
  },
  { eager: false },
);
