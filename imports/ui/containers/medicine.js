import { composeWithTracker } from 'react-komposer';
import { Medicine } from '../../api/medicine/medicine.js';
import { MedicineDetail } from '../components/medicine.js';
import { Loading } from '../components/loading.js';

const composer = (props, onReady) => {
  
  const subscription = Meteor.subscribe('medicine.details', props.brand);
  if (subscription.ready()) {
    const medicine = Medicine.findOne({brand: props.brand});
    onReady(null, { medicine});
  }
}; 

export default composeWithTracker(composer, Loading)(MedicineDetail);
