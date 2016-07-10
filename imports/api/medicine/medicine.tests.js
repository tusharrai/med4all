/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Medicines } from './medicines.js';

describe('Medicines collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Medicines, 'object');
  });
});
