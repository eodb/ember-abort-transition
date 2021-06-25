import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class OtherAboutxController extends Controller {
  @inject router;

  queryParams = ['category'];

  category = '';

  @action
  goAway() {
    this.router
      .transitionTo('other')
      .catch((reason) => console.log(`Failed to transition: ${reason}`));
  }

  @action
  goAwayWithTransitionToRoute() {
    this.transitionToRoute('other');
  }
}
