import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class OtherAboutxRoute extends Route {
  queryParams = {
    category: {
      refreshModel: true,
    },
  };

  model(params, transition) {
    console.log(
      `The model hook just ran! after transition to: ${transition.to.name}`
    );
    return 'Hello Ember!';
  }

  @action
  willTransition(transition) {
    if (transition.to.name !== 'other.aboutx') {
      console.log(`Here we abort the transition: ${transition.to.name}`);
      transition.abort();
    }
  }
}
