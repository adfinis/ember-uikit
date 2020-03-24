import Controller from "@ember/controller";

export default Controller.extend({
  visible: false,
  btnClose: true,
  closable: true,
  modalClass: "",
  dialogClass: "",

  actions: {
    submit() {
      this.set("visible", false);
    },
  },
});
