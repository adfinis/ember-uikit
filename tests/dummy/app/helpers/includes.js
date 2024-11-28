import { helper } from "@ember/component/helper";

export default helper(function includes([needle, haystack]) {
  return haystack?.includes?.(needle) ?? false;
});
