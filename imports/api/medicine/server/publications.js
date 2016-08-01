import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import { Medicine } from '../medicine';


Meteor.publish('medicine.details', function (brand) {
  check (brand, String);
  let init = true;
  
  MEDICINE_DETAILS_URL = `${Meteor.settings.private.med_url}/medicine_details/`;

  MEDICINE_ALTERNATIVES_URL = `${Meteor.settings.private.med_url}/medicine_alternatives/`;

  MEDICINE_DETAILS_OPTIONS = {params: { id: brand,
                      key: Meteor.settings.private.med_key }};

  MEDICINE_ALTERNATIVES_OPTIONS = {params: { id: brand,
                      key: Meteor.settings.private.med_key,
                      limit: 100 }};

  const medicineDetail = JSON.parse(HTTP.call("GET", MEDICINE_DETAILS_URL, MEDICINE_DETAILS_OPTIONS).content);
  
  const medicineAlternatives = JSON.parse(HTTP.call("GET", MEDICINE_ALTERNATIVES_URL, MEDICINE_ALTERNATIVES_OPTIONS).content);

  const medicine = {
    brand: medicineDetail.response.medicine.brand,
    category: medicineDetail.response.medicine.category,
    manufacturer: medicineDetail.response.medicine.manufacturer,
    package_price: medicineDetail.response.medicine.package_price,
    package_qty: medicineDetail.response.medicine.package_qty,
    package_type: medicineDetail.response.medicine.package_type,
    unit_price: medicineDetail.response.medicine.unit_price,
    unit_qty: medicineDetail.response.medicine.unit_qty,
    constituents: medicineDetail.response.constituents,
    alternatives: medicineAlternatives.response.medicine_alternatives,
  };
  console.log(medicine);
  this.added("Medicine", brand, medicine)
  this.ready();
}); 
