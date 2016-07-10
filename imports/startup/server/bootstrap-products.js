import {Medicines} from '../../api/medicines/medicines.js';

let bootstrapProducts = () => {
  if (Medicines.find().count() === 0) {
    console.log("Importing private/brands.json to db")
    var data = JSON.parse(Assets.getText("brand-test.json"));
    console.log(data);
    data.forEach((item, index, array) => {
      const itemExists = Medicines.findOne({ brand: item.suggestion });
      if (!itemExists) {
        Medicines.insert({brand: item.suggestion, 
          manufacturer: "", 
          unit_type: ""
        });
      }
    })
  }
};

export default bootstrapProducts;
