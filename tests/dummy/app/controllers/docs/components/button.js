import { A } from "@ember/array";
import Controller from "@ember/controller";
import { task, timeout } from "ember-concurrency";
import { BUTTON_COLOR_OPTIONS } from "ember-uikit/components/uk-button";

export default Controller.extend({
  init(...args) {
    this._super(...args);

    this.set("firedEvents", A());
  },

  label: "Button",
  type: "button",
  disabled: false,
  active: false,
  loading: false,
  color: "default",
  size: "",
  width: "",
  title: "",

  colors: BUTTON_COLOR_OPTIONS,

  fireEvent: task(function* (name) {
    this.firedEvents.pushObject(name);

    yield timeout(1000);

    this.firedEvents.removeObject(name);
  }),
});
