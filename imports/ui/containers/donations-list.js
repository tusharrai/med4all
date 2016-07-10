import { composeWithTracker } from 'react-komposer';
import { Donations } from '../../api/donations/donations.js';
import { DonationsList } from '../components/donations-list.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const limit = 200;
  const subscription = Meteor.subscribe('donations');
  if (subscription.ready()) {
    const donations = Donations.find().fetch();
    onReady(null, { donations });
  }
};

export default composeWithTracker(composer, Loading)(DonationsList);
