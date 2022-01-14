import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsComponentsBadgeController extends Controller {
  @tracked label = "100";
}
