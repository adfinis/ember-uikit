import { confirm } from "ember-uikit";

export default async function myFunction() {
  if (!(await confirm("Really?"))) {
    return;
  }

  // execute logic
}
