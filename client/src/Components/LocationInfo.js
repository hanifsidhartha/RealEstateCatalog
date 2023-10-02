import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../Components/ProgressSteps";

export default function LocationInfo() {
  const navigate = useNavigate();
  const basicInfo = localStorage.getItem("basicInfo");
  const propertyDetails = localStorage.getItem("propertydetails");
  const generalInfo = localStorage.getItem("generalInfo");
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const parsedBasic = JSON.parse(basicInfo);
  const parsedProperty = JSON.parse(propertyDetails);
  const parsedgeneral = JSON.parse(generalInfo);

  const handleSave = () => {
    navigate("/layout/home");
    const wholeData = {
      ...parsedBasic,
      ...parsedProperty,
      ...parsedgeneral,
      ...formData,
    };
    console.log("Request Data:", wholeData); // Log the request data
    const token = localStorage.getItem("token");

    fetch("http://localhost:5001/add-property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the authorization token
      },
      body: JSON.stringify(wholeData),
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
      .then((response_data) => {
        console.log("Response from server:", response_data);

        if (response_data.code === 200) {
          // console.log("Success: Redirecting to /layout/home");
          toast.success(response_data.message);
          navigate("/layout/home");
        } else {
          // console.log("Error: Redirecting to /layout/basicinfo");
          toast.error(response_data.message);
          navigate("/layout/basicinfo");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to save property.");
        return;
      });
  };

  const handleCancel = () => {
    navigate("/layout/general-info");
  };
  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <label htmlFor="area">Area</label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            >
              <option value="">Select Area</option>
              <option value="Area1">Area1</option>
              <option value="Area2">Area2</option>
              {/* Add more area options as needed */}
            </select>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
            />
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              placeholder="Latitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              <option value="City1">City1</option>
              <option value="City2">City2</option>
              {/* Add more city options as needed */}
            </select>

            <label htmlFor="pincode">Pincode</label>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select Pincode</option>
              <option value="Pincode1">Pincode1</option>
              <option value="Pincode2">Pincode2</option>
              {/* Add more pincode options as needed */}
            </select>

            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              placeholder="Landmark"
              onChange={handleChange}
            />

            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              placeholder="Longitude"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Previous</button>
          <button onClick={handleSave}>Add Property</button>
        </div>
      </div>
    </div>
  );
}
