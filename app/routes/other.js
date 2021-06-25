import Route from '@ember/routing/route';

export default class OtherRoute extends Route {
  queryParams = {
    someqp: {
      refreshModel: true,
    },
    otherqp: {
      refreshModel: true,
    },
  };
}
