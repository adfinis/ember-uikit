import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsComponentsIconController extends Controller {
  @tracked icon = "happy";
  @tracked ratio = 5;
}
