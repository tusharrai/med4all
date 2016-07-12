import { composeWithTracker } from 'react-komposer';
import { Medicines } from '../../api/medicines/medicines.js';
import { MedicinesList } from '../components/medicines-list.js';
import { Loading } from '../components/loading.js';
import { MedicineSearch } from '../../api/medicines/search.js';


const composer = (params, onReady) => {
  console.log("Calling Subscription");
  const subscription = Meteor.subscribe('searchmedicines');
  const medicines = MedicineSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>");
      }
    });
  if (subscription.ready()) {
  	console.log("Subscription Ready");
    onReady(null, { medicines });
  }
};

export default composeWithTracker(composer, Loading)(MedicinesList);
