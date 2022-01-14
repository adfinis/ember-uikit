import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsComponentsSwitcherController extends Controller {
  @tracked type = "tab";
  @tracked active = 0;
  @tracked animation = "uk-animation-fade";
  @tracked animationDuration = 200;
  @tracked swiping = false;
}
