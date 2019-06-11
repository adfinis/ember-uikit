import Controller from "@ember/controller";

export default Controller.extend({
  visible: false,
  closable: true,

  actions: {
    submit() {
      this.set("visible", false);
    }
  }
});
