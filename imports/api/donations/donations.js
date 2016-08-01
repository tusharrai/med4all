import { Mongo } from 'meteor/mongo';
import faker from 'faker';

export const Donations = new Mongo.Collection('Donations');

Donations.schema = new SimpleSchema({
  donationId: {
    type: String,
    label: 'Donation Id',
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: 'User Id',
  },
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
  quantity: {
    type: String,
    label: 'Quantity',
    optional: true,
  },
  
  batchNumber: {
    type: String,
    label: 'Batch Number',
    optional: true,
  },
  manufactureMonth: {
    type: Number,
    label: 'Manufacture Date',
    optional: true,
  },
  manufactureYear: {
    type: Number,
    label: 'Manufacture Year',
    optional: true,
  },
  expiryMonth: {
    type: Number,
    label: 'Expiry Date',
    optional: true,
  },
  expiryYear: {
    type: Number,
    label: 'Expiry Year',
    optional: true,
  },
  donationMode: {
    type: String,
    optional: true,
  },
  pickupAddress: {
    type: String,
    optional: true,

  },
  pickupDate: {
    type: Date,
    optional: true,
  },
  pickupTime: {
    type: String,
    optional:true,
  },
  droppedAt: {
    type: String, //DropBox Id
    optional: true,
  },

  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (!this.isInsert) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  
});

Donations.attachSchema(Donations.schema);
