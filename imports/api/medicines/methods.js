import { Medicines } from './medicines';

export const insertMedicine = new ValidatedMethod({
  name: 'medicines.insert',
  validate: new SimpleSchema({
    brand: { type: String },
    manufacturer: {type: String},
    unit_type: {type: String}
  }).validator(),
  run(medicine) {
    Medicines.insert(medicine);
  },
});

export const updateMedicine = new ValidatedMethod({
  name: 'medicines.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.brand': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Medicines.update(_id, { $set: update });
  },
});

export const removeMedicine = new ValidatedMethod({
  name: 'medicines.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Medicines.remove(_id);
  },
});
