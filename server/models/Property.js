const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true, 
};

const optionalString = {
  type: String,
};

const propertySchema = new mongoose.Schema({
  propertyType: String,
  propertyAge: String,
  propertyDescription: String,
  negotiable: String,
  ownership: String,
  propertyApproved: String,
  bankLoan: String,
  length: String,
  totalArea: String,
  numberOfBHK: String,
  attached: String,
  furnished: String,
  facing: String,
  breath: String,
  areaUnit: String,
  numberOfFloors: String,
  hasWesternToilet: String,
  hasCarParking: String,
  hasElectricity: String,
  ownerName: String,
  postedBy: String,
  featuredPackage: String,
  mobileNumber: String,
  saleType: String,
  ppdPackage: String,
  email: String,
  area: String,
  address: String,
  latitude: String,
  city: String,
  pincode: String,
  landmark: String,
  longitude: String,
  image: String,
  price: String,
});

module.exports = mongoose.model("Property", propertySchema);
