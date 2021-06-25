import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-abort-transition/config/environment';

export default class App extends Application {
  // LOG_TRANSITIONS = true;
  // LOG_TRANSITIONS_INTERNAL = true;

  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
