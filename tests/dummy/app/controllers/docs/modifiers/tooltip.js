import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsModifiersTooltipController extends Controller {
  @tracked title = "Tooltip content";
  @tracked pos = "top";
  @tracked offset = false;
  @tracked animation = "uk-animation-scale-up";
  @tracked duration = 100;
  @tracked delay = 0;
  @tracked cls = "uk-active";

  get positions() {
    return [
      "top",
      "top-left",
      "top-right",
      "bottom",
      "bottom-left",
      "bottom-right",
      "left",
      "right",
    ];
  }
}
