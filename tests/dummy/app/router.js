import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('button');
  this.route('card');
  this.route('tab');
  this.route('subnav');
  this.route('switcher');
  this.route('list');
  this.route('icon');
  this.route('spinner');
});

export default Router;
