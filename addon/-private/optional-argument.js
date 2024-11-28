import createDecorator from "ember-uikit/-private/decorator";

export default createDecorator(function (
  target,
  property,
  descriptor,
  defaultValue = () => {},
) {
  return {
    get() {
      return this.args[property] ?? defaultValue;
    },
  };
});
