import {Medicines} from '../../api/medicines/medicines.js';

let createSource = () => {
  console.log("Creating Search Source");
  SearchSource.defineSource('searchmedicines', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit:20};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {brand: regExp},
      {manufacturer: regExp}
    ]};

    return Medicines.find(selector, options).fetch();
  } else {
    return Medicines.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
}


export default createSource;