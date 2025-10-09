import UIkit from "uikit";

export default async function confirm(text, options = {}) {
  try {
    await UIkit.modal.confirm(text, options);

    return true;
  } catch {
    return false;
  }
}
