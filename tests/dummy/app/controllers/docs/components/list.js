import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsComponentsListController extends Controller {
  @tracked divider = false;
  @tracked striped = true;
  @tracked bullet = false;
  @tracked large = false;
  @tracked width = "";
}
