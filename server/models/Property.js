const mongoose = require("mongoose");

const requiredString = {
  type: String,
};

const propertySchema = new mongoose.Schema({
  property_type: requiredString,
  Price: requiredString,
  property_age: requiredString,
  property_description: requiredString,
  negotiable: requiredString,
  ownership: requiredString,
  property_approved: requiredString,
  bank_loan: requiredString,
  length: requiredString,
  total_area: requiredString,
  no_of_bhk: requiredString,
  attached: requiredString,
  furnished: requiredString,
  facing: requiredString,
  breath: requiredString,
  area_unit: requiredString,
  no_of_floor: requiredString,
  western_toilet: requiredString,
  car_parking: requiredString,
  electricity: requiredString,
  name: requiredString,
  posted_by: requiredString,
  featured_package: requiredString,
  mobile: requiredString,
  sale_type: requiredString,
  ppd_package: requiredString,
  email: requiredString,
  area: requiredString,
  address: requiredString,
  latitude: requiredString,
  city: requiredString,
  pincode: requiredString,
  landmark: requiredString,
  longitude: requiredString,
});

module.exports = mongoose.model("Property", propertySchema);
