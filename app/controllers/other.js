import Controller from '@ember/controller';

export default class OtherController extends Controller {
  queryParams = ['someqp'];

  someqp = '';
  otherqp = '';
}
