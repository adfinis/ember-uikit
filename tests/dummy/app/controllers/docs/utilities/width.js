import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class DocsUtilitiesWidthController extends Controller {
  @tracked width = "1-1 1-2@m";
}
