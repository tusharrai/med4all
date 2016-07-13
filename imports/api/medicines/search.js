var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['brand', 'manufacturer'];

export const MedicineSearch = new SearchSource('searchmedicines', fields, options);
