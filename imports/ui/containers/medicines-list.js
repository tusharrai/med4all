import { composeWithTracker } from 'react-komposer';
import { Medicines } from '../../api/medicines/medicines.js';
import { MedicinesList } from '../components/medicines-list.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const limit = 200;
  const subscription = Meteor.subscribe('medicines', limit);
  if (subscription.ready()) {
    const medicines = Medicines.find().fetch();
    onReady(null, { medicines });
  }
};

export default composeWithTracker(composer, Loading)(MedicinesList);
