import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import { Medicine } from '../medicine';


Meteor.publish('medicine.truemd', function (brand) {
  check (brand, String);
  let init = true;
  
  REST_URL = 'http://www.truemd.in/api/medicine_details/';
  REST_OPTIONS = {params: { id: brand,
                      key: '6b79790b28e4c244fdc9f91e161303' }};

  const data = JSON.parse(HTTP.call("GET", REST_URL, REST_OPTIONS).content);
  const medicine = {
    brand: data.response.medicine.brand,
    category: data.response.medicine.category,
    manufacturer: data.response.medicine.manufacturer,
    package_price: data.response.medicine.package_price,
    package_qty: data.response.medicine.package_qty,
    package_type: data.response.medicine.package_type,
    unit_price: data.response.medicine.unit_price,
    unit_qty: data.response.medicine.unit_qty,
  };
  // console.log(medicine);
  this.added("Medicine", brand, medicine)
  this.ready();
}); 