import {Medicines} from '../../api/medicines/medicines.js';

  // console.log("Creating Search Source");
  SearchSource.defineSource('searchmedicines', function(searchText, options) {

  var options = {sort: {isoScore: -1}, limit:50};
    // var options = {sort: {isoScore: -1}};


  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {brand: regExp},
      {manufacturer: regExp}
    ]};
      // console.log("with searchText");

    return Medicines.find(selector, options).fetch();

  } else {
          // console.log("without searchText");

    return Medicines.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
