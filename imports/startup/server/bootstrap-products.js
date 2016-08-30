import {Medicines} from '../../api/medicines/medicines.js';

let bootstrapProducts = () => {
  if (Medicines.find().count() === 0) {
    console.log("Importing private/brands.json to db")
    var data = JSON.parse(Assets.getText("brands-full.json"));
    
    data.forEach((item, index, array) => {
      const itemExists = Medicines.findOne({ brand: item.suggestion });
      if (!itemExists) {
        console.log(item.suggestion);
        Medicines.insert({brand: item.suggestion, 
          manufacturer: "", 
          unit_type: ""
        });
      }
    })
  }
};

export default bootstrapProducts;
