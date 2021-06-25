import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | other.about2', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:other.about2');
    assert.ok(controller);
  });
});
