// ParentForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Basicinfo.css";
import ProgressSteps from "../Components/ProgressSteps";
import BasicInfo from "./Basicinfo";
import PropertyDetails from "./PropertyDetails";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";

const ParentForm = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    negotiable: "",
    price: "",
    ownership: "",
    propertyAge: "",
    propertyApproved: "",
    propertyDescription: "",
    bankLoan: "",
    // Add additional fields as needed
    length: "",
    breath: "",
    totalArea: "",
    areaUnit: "",
    noOfBHK: "",
    noOfFloor: "",
    attached: "",
    westernToilet: "",
    furnished: "",
    carParking: "",
    lift: "",
    electricity: "",
    facing: "",
    name: "",
    mobile: "",
    owner: "",
    saleType: "",
    postedBy: "",
    featuredPackage: "",
    ppdPackage: "",
    photo: null,
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const [locationInfoReached, setLocationInfoReached] = useState(false);
  const navigate = useNavigate();

  const handleDataChange = (data) => {
    setFormData({ ...formData, ...data }); // Merge the data received from child components into the formData state
  };

  const handleSave = () => {
    if (locationInfoReached) {
      // Send the data to the server
      fetch("/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            console.error(
              "Network response was not ok:",
              response.status,
              response.statusText
            );
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Property saved:", data);
          alert("Property saved successfully!");
          navigate("/layout/property-detail");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to save property.");
        });
    } else {
      setLocationInfoReached(true);
      navigate("/layout/location-info");
    }
  };

  const handleCancel = () => {
    navigate("/layout/home");
  };

  return (
    <div className="property">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      {!locationInfoReached && (
        <>
          <BasicInfo onDataChange={handleDataChange} />
          <PropertyDetails onDataChange={handleDataChange} />
          <GeneralInfo onDataChange={handleDataChange} />
        </>
      )}
      <LocationInfo onDataChange={handleDataChange} />
      <div className="form-buttons">
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>
          {locationInfoReached ? "Save" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};

export default ParentForm;
