import { Mongo } from 'meteor/mongo';
import faker from 'faker';

export const Medicines = new Mongo.Collection('Medicines');

Medicines.schema = new SimpleSchema({
  brand: {
    type: String,
    label: 'Medicine Brand/Name',
  },
  category: {
    type: String,
    label: 'Medicine Category',
    optional: true,
  },
  manufacturer: {
    type: String,
    label: 'Medicine Manufacturer',
    optional: true,
  },
  package_type: {
    type: String,
    label: 'Medicine Package Type',
    optional: true,
  },
  unit_type: {
    type: String,
    label: 'Medicine Unit Type',
    optional: true,
  },
  constituents: {
    type: [Object],
    optional: true,
  },
  "constituents.$.name": {
    type: String,
    label: 'Name of the constituent',
    optional: true,
  },
  "constituents.$.qty": {
    type: Number,
    label: 'Quantity of the Constituent',
    optional: true,
  },
  "constituents.$.strength": {
    type: String,
    label: 'Strength of the constituent',
    optional: true,
  },
});

// {
//   "status": "ok",
//   "response": {
//     "medicine": {
//       "brand": "Crocin (1000 mg)",
//       "category": "Tablet",
//       "d_class": "null",
//       "generic_id": 72361,
//       "id": 23215,
//       "manufacturer": "Glaxo Smithkline Pharmaceuticals Ltd.",
//       "package_price": 49.6,
//       "package_qty": 40,
//       "package_type": "Tablet",
//       "unit_price": 1.24,
//       "unit_qty": 1,
//       "unit_type": "Tablet"
//     },
//     "constituents": [
//       {
//         "generic_id": "72361",
//         "id": 127767,
//         "name": "Paracetamol",
//         "qty": 1,
//         "strength": "1000 mg\r"
//       }
//     ]
//   }
// }

Medicines.attachSchema(Medicines.schema);

// Factory.define('medicine', Medicines, {
//   title: () => faker.hacker.phrase(),
// });
