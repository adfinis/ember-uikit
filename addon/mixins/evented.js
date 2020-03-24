import Mixin from "@ember/object/mixin";
import { camelize } from "@ember/string";

export const EVENTS = {
  TOUCH_START: "on-touch-start",
  TOUCH_MOVE: "on-touch-move",
  TOUCH_END: "on-touch-end",
  TOUCH_CANCEL: "on-touch-cancel",

  KEY_DOWN: "on-key-down",
  KEY_UP: "on-key-up",
  KEY_PRESS: "on-key-press",

  MOUSE_DOWN: "on-mouse-down",
  MOUSE_UP: "on-mouse-up",
  CONTEXT_MENU: "on-context-menu",
  CLICK: "on-click",
  DOUBLE_CLICK: "on-double-click",
  MOUSE_MOVE: "on-mouse-move",
  FOCUS_IN: "on-focus-in",
  FOCUS_OUT: "on-focus-out",
  MOUSE_ENTER: "on-mouse-enter",
  MOUSE_LEAVE: "on-mouse-leave",

  SUBMIT: "on-submit",
  CHANGE: "on-change",
  INPUT: "on-input",

  DRAG_START: "on-drag-start",
  DRAG: "on-drag",
  DRAG_ENTER: "on-drag-enter",
  DRAG_LEAVE: "on-drag-leave",
  DRAG_OVER: "on-drag-over",
  DRAG_END: "on-drag-end",
  DROP: "on-drop",
};

export default Mixin.create({
  init() {
    this._super(...arguments);

    let handlers = Object.values(EVENTS).reduce((obj, evt) => {
      return Object.assign(obj, {
        [camelize(evt.replace(/on-/, ""))]: (e) =>
          this.getWithDefault(evt, () => {})(e),
      });
    }, {});

    this.setProperties(handlers);
  },
});
