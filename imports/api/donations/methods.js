import { Donations } from './donations';

export const insertDonation = new ValidatedMethod({
  name: 'donations.insert',
  validate: new SimpleSchema({
    userId: {type: String},
    brand: { type: String },
    manufacturer: {type: String},
    category: {type: String},
    quantity: {type: String},

  }).validator(),
  run(donation) {
    Donations.insert(donation);
  },
});

export const updateDonation = new ValidatedMethod({
  name: 'donations.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.brand': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Donations.update(_id, { $set: update });
  },
});

export const removeDonation = new ValidatedMethod({
  name: 'donations.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Donations.remove(_id);
  },
});
