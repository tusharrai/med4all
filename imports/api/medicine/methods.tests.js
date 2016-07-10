/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Medicine } from './medicines.js';
import { insertMedicine, updateMedicine, removeMedicine } from './methods.js';

describe('Medicine methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a medicine into the Medicine collection', function () {
    insertMedicine.call({ brand: 'You can\'t arrest me, I\'m the Cake Boss!' });
    const getMedicine = Medicine.findOne({ brand: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getMedicine.brand, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a medicine in the Medicine collection', function () {
    const { _id } = Factory.create('medicine');

    updateMedicine.call({
      _id,
      update: {
        brand: 'You can\'t arrest me, I\'m the Cake Boss!',
      },
    });

    const getMedicine = Medicine.findOne(_id);
    assert.equal(getMedicine.brand, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a medicine from the Medicine collection', function () {
    const { _id } = Factory.create('medicine');
    removeMedicine.call({ _id });
    const getMedicine = Medicine.findOne(_id);
    assert.equal(getMedicine, undefined);
  });
});
