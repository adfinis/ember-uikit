import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('components', function() {
    this.route('badge');
    this.route('button');
    this.route('card');
    this.route('icon');
    this.route('label');
    this.route('list');
    this.route('sortable');
    this.route('spinner');
    this.route('subnav');
    this.route('switcher');
    this.route('tab');
  });

  this.route('utilities', function() {
    this.route('flex');
    this.route('width');
  });
});

export default Router;
