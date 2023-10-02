<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Basicinfo.css"; // Import your custom CSS for styling
import ProgressSteps from "../Components/ProgressSteps";

export default function GeneraInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    owner: "",
    saleType: "",
    postedBy: "",
    featuredPackage: "",
    ppdPackage: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleSave = () => {
    navigate("/layout/location-info");
  };
  const handleCancel = () => {
    navigate("/layout/property-detail");
  };
  const handleImageClick = () => {
    // Trigger the file input when the image is clicked
    const fileInput = document.getElementById("addPhoto");
    fileInput.click();
  };

  return (
    <div className="propert">
      <h2>ADD NEW PROPERTY</h2>
      <ProgressSteps />
      <div className="property-form">
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <select
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            >
              <option value="">Owner</option>
              <option value="Owner">Owner</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="postedBy">Posted By</label>
            <select
              id="postedBy"
              name="postedBy"
              value={formData.postedBy}
              onChange={handleChange}
            >
              <option value="">Posted By</option>
              <option value="Posted By Owner">Posted By Owner</option>
              <option value="Posted By Agent">Posted By Agent</option>
            </select>
            <label htmlFor="featuredPackage">Featured Package</label>
            <select
              id="featuredPackage"
              name="featuredPackage"
              value={formData.featuredPackage}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>
            <div className="imge" onClick={handleImageClick}>
              <img
                src={
                  formData.photo
                    ? URL.createObjectURL(formData.photo)
                    : "/950796.png"
                }
                alt="pic missing"
              />
              <label htmlFor="addPhoto">Add Photo</label>
              <input
                type="file"
                id="addPhoto"
                name="addPhoto"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
            <label htmlFor="saleType">Sale Type</label>
            <select
              id="saleType"
              name="saleType"
              value={formData.saleType}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
            <label htmlFor="ppdPackage">PPD Package</label>
            <select
              id="ppdPackage"
              name="ppdPackage"
              value={formData.ppdPackage}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Standard">Standard</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleCancel}>Previous</button>
          <button onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
}
=======
import React from 'react'
//import ImgUrl from '../assets/images/ImgUrl'

const generalinfo = () => {
  return (
    <div className='container'>
      
      <div className="header">
            <div><span>ADD New Property</span></div>
            <div className='headbuttons'>
                <button>BasicInfo</button>
                <button>PropertyDetail</button>
                <button>GeneralInfo</button>
                <button>LocationInfo</button>
            </div>
        </div>

        <div className='body'>
            <div className='name' placeholder='owner'>
                <span>Name</span>
                <select>
                    <option>owner1</option>
                    <option>owner2</option>
                    <option>owner3</option>
                </select>
             </div>

             <div className='number'>
                <span>Pincode</span>
                <input type='number' placeholder='number' />
            </div>

            <div className='postedby' placeholder='postedby'>
                <span>PostedBy</span>
                <select>
                    <option>post1</option>
                    <option>post2</option>
                    <option>post3</option>
                </select>
             </div>

             <div className='saletype' placeholder='SaleType'>
                <span>SaleType</span>
                <select>
                    <option>type1</option>
                    <option>type22</option>
                    <option>type3</option>
                </select>
             </div>

             <div className='featuredpackage' placeholder='featuredPakage' >
                <span>featuredPakage</span>
                <select>
                    <option>package1</option>
                    <option>package2</option>
                    <option>package3</option>
                </select>
             </div>

             <div className='ppd' placeholder='ppd'>
                <span>PPD</span>
                <select>
                    <option>ppd1</option>
                    <option>ppd2</option>
                    <option>ppd3</option>
                </select>
             </div>

             <div className='addimg'>
              //  <img src={imglogo} /><span>AddImage</span>
             </div> 


         </div>


       

        <div className='footer'>
            <button>Previous</button>
            <button>Save&Continue</button>
        </div>
    </div>
  )
}

export default generalinfo
>>>>>>> f99e86c2b75b233458677f4de51270c024aae837
