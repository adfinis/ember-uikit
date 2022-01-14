import { helper } from "@ember/component/helper";
import { isEmpty } from "@ember/utils";

export function trimmedJoin(positional, { separator = " " }) {
  return (
    positional
      ?.filter((v) => !isEmpty(v))
      .map((v) => String(v).trim())
      .join(separator) || null
  );
}

export default helper(trimmedJoin);
