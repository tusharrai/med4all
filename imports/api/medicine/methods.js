import { Medicine } from './medicine';

export const insertMedicine = new ValidatedMethod({
  name: 'medicine.insert',
  validate: new SimpleSchema({
    brand: { type: String },
    manufacturer: {type: String},
    unit_type: {type: String}
  }).validator(),
  run(medicine) {
    Medicine.insert(medicine);
  },
});

export const updateMedicine = new ValidatedMethod({
  name: 'medicine.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.brand': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Medicine.update(_id, { $set: update });
  },
});

export const removeMedicine = new ValidatedMethod({
  name: 'medicine.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Medicine.remove(_id);
  },
});
