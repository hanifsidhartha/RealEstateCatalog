const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true, // Adding this line to make the field required
};

const optionalString = {
  type: String,
};

const propertySchema = new mongoose.Schema({
  property_type: optionalString,
  property_age: optionalString,
  property_description: optionalString,
  negotiable: optionalString,
  ownership: optionalString,
  property_approved: optionalString,
  bank_loan: optionalString,
  length: optionalString,
  total_area: optionalString,
  no_of_bhk: optionalString,
  attached: optionalString,
  furnished: optionalString,
  facing: optionalString,
  breath: optionalString,
  area_unit: optionalString,
  no_of_floor: optionalString,
  western_toilet: optionalString,
  car_parking: optionalString,
  electricity: optionalString,
  name: optionalString,
  posted_by: optionalString,
  featured_package: optionalString,
  mobile: optionalString,
  sale_type: optionalString,
  ppd_package: optionalString,
  email: optionalString,
  area: optionalString,
  address: optionalString,
  latitude: optionalString,
  city: optionalString,
  pincode: optionalString,
  landmark: optionalString,
  longitude: optionalString,
});

module.exports = mongoose.model("Property", propertySchema);
