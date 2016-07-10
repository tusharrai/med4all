import { Medicines } from '../medicines';
import { check } from 'meteor/check';

const MAX_ITEMS = 100;

Meteor.publish('medicines', function (limit) {
  check (limit, Number);
  return Medicines.find({}, {limit: Math.min(limit, MAX_ITEMS)});
});

Meteor.publish('medicine.brand', function (brand) {
  check (brand, String);
  return Medicines.find({brand: brand});
});

