import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../Components/ProgressSteps";

export default function LocationInfo() {
  const navigate = useNavigate();
  const basicInfo = JSON.parse(localStorage.getItem("basicInfo"));
  const propertyDetails = JSON.parse(localStorage.getItem("propertydetails"));
  const generalInfo = JSON.parse(localStorage.getItem("genralInfo"));
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

  const handleSave = async () => {
    navigate("/layout/home");
    try {
      const wholeData = {
        ...basicInfo,
        ...propertyDetails,
        ...generalInfo,
        ...formData,
      };
      console.log("Request Data:", wholeData); // Log the request data
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5001/add-property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the authorization token
        },
        body: JSON.stringify(wholeData),
      });
      if (!response.ok) {
        console.error(
          "Network response was not ok:",
          response.status,
          response.statusText
        );
        throw new Error("Network response was not ok");
      }
      const response_data = await response.json();
      console.log("Response from server:", response_data);

      if (response_data.code === 200) {
        console.log("Navigating to /layout/home...");
        toast.success(response_data.message);
        navigate("/layout/home");
      } else {
        console.log("Navigating to /layout/basicinfo...");
        toast.error(response_data.message);
        navigate("/layout/basicinfo");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to save property.");
      return;
    }
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
              <option value="Area1">900</option>
              <option value="Area2">1200</option>
              <option value="Area3">1400</option>
              <option value="Area4">1800</option>
              <option value="Area5">2100</option>
              <option value="Area6">2400</option>
              <option value="Area7">3000</option>
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
              <option value="City1">Hyderabad</option>
              <option value="City2">Bangalore</option>
              <option value="City3">Chennai</option>
              <option value="City4">Delhi</option>
              <option value="City5">Mumbai</option>
              <option value="City6">Kurnool</option>
              <option value="City7">Kolkata</option>
              <option value="City8">Pune</option>
              <option value="City9">Jaipur</option>
              <option value="City10">Ahmedabad</option>
              <option value="City11">Lucknow</option>
              <option value="City12">Chandigarh</option>
              <option value="City13">Bhopal</option>
              <option value="City14">Coimbatore</option>
              <option value="City15">Indore</option>
              <option value="City16">Kochi</option>
              <option value="City17">Visakhapatnam</option>
              <option value="City18">Surat</option>
              <option value="City19">Nagpur</option>
              <option value="City20">Amritsar</option>
              <option value="City21">Bhubaneswar</option>
              <option value="City22">Patna</option>
              <option value="City23">Dehradun</option>
              <option value="City24">Ranchi</option>
              <option value="City25">Guwahati</option>
            </select>

            <label htmlFor="pincode">Pincode</label>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select Pincode</option>
              <option value="500001">Hyderabad (500001)</option>
              <option value="560001">Bangalore (560001)</option>
              <option value="600001">Chennai (600001)</option>
              <option value="110001">Delhi (110001)</option>
              <option value="400001">Mumbai (400001)</option>
              <option value="518001">Kurnool (518001)</option>
              <option value="700001">Kolkata (700001)</option>
              <option value="411001">Pune (411001)</option>
              <option value="302001">Jaipur (302001)</option>
              <option value="380001">Ahmedabad (380001)</option>
              <option value="226001">Lucknow (226001)</option>
              <option value="160001">Chandigarh (160001)</option>
              <option value="462001">Bhopal (462001)</option>
              <option value="641001">Coimbatore (641001)</option>
              <option value="452001">Indore (452001)</option>
              <option value="682001">Kochi (682001)</option>
              <option value="530001">Visakhapatnam (530001)</option>
              <option value="395001">Surat (395001)</option>
              <option value="440001">Nagpur (440001)</option>
              <option value="143001">Amritsar (143001)</option>
              <option value="751001">Bhubaneswar (751001)</option>
              <option value="800001">Patna (800001)</option>
              <option value="248001">Dehradun (248001)</option>
              <option value="834001">Ranchi (834001)</option>
              <option value="781001">Guwahati (781001)</option>
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
