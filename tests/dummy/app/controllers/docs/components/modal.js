import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsComponentsModelController extends Controller {
  @tracked visible = false;
  @tracked btnClose = true;
  @tracked closable = true;
  @tracked modalClass = "";
  @tracked dialogClass = "";
}
