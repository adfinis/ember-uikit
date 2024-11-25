import UIkit from "uikit";

export default async function confirm(text) {
  try {
    await UIkit.modal.confirm(text);

    return true;
  } catch {
    return false;
  }
}
