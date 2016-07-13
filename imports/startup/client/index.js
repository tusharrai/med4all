import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './routes.js';


// Bert.defaults.style = 'growl-top-right';

Bert.defaults = {
  hideDelay: 1500,
  // Accepts: a number in milliseconds.
  style: 'growl-bottom-right',
  // Accepts: fixed-top, fixed-bottom, growl-top-left,   growl-top-right,
  // growl-bottom-left, growl-bottom-right.
  type: 'default'
  // Accepts: default, success, info, warning, danger.
};

// Meteor.startup (() => {
// 	var options = {
//   keepHistory: 1000 * 60 * 5,
//   localSearch: true
// };
// var fields = ['brand', 'manufacturer'];

// MedicineSearch = new SearchSource('searchmedicines', fields, options);
// });
