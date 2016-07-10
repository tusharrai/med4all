/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { DonationBox } from './donationbox.js';

describe('DonationBox collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof DonationBox, 'object');
  });
});
