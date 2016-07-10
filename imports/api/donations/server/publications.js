import { Donations } from '../donations';
import { check } from 'meteor/check';

const MAX_ITEMS = 100;

Meteor.publish('donations', function (limit) {
  return Donations.find({
    "userId": this.userId
  });
});
