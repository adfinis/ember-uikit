// ember-cli-build.js

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-uikit': {
      useIcons: false,
      whitelist: ['uk-button', 'uk-card']
    }
  });

  return app.toTree();
};
