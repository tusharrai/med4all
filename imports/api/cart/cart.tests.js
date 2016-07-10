/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Cart } from './cart.js';

describe('Cart collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Cart, 'object');
  });
});
