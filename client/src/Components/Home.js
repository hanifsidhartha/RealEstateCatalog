import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  // const MockData = [
  //   {
  //     ppdId: "PPD1125",
  //     propertyType: "Plot",
  //     contact: "97852 52525",
  //     area: "1200",
  //     views: "02",
  //     status: "Sold",
  //     daysLeft: "00",
  //   },
  //   {
  //     ppdId: "PPD1202",
  //     propertyType: "House",
  //     contact: "97852 52525",
  //     area: "2500",
  //     views: "02",
  //     status: "Unsold",
  //     daysLeft: "35",
  //   },
  //   {
  //     ppdId: "PPD1235",
  //     propertyType: "House",
  //     contact: "97852 52525",
  //     area: "1800",
  //     views: "05",
  //     status: "Unsold",
  //     daysLeft: "12",
  //   },
  //   {
  //     ppdId: "PPD1278",
  //     propertyType: "House",
  //     contact: "97852 52525",
  //     area: "800",
  //     views: "03",
  //     status: "Unsold",
  //     daysLeft: "23",
  //   },
  //   {
  //     ppdId: "PPD1311",
  //     propertyType: "Flat",
  //     contact: "97852 52525",
  //     area: "2000",
  //     views: "10",
  //     status: "Sold",
  //     daysLeft: "00",
  //   },
  //   {
  //     ppdId: "PPD1323",
  //     propertyType: "House",
  //     contact: "97852 52525",
  //     area: "1250",
  //     views: "02",
  //     status: "Unsold",
  //     daysLeft: "02",
  //   },
  // ];
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <div className="home-01">
          <div>
            <input type="text" placeholder="Search PPD ID" />
          </div>
          <div>
            <button
              className="btn"
              onClick={() => navigate("/layout/basicinfo")}
            >
              + Add Property
            </button>
          </div>
        </div>
        <div className="home-02">
          <div className="heading">PPD ID</div>
          <div className="heading">Image</div>
          <div className="heading">Property</div>
          <div className="heading">Contact</div>
          <div className="heading">Area</div>
          <div className="heading">Views</div>
          <div className="heading">Status</div>
          <div className="heading">Days Left</div>
          <div className="heading">Action</div>
        </div>
        {/* {MockData.map((data, index) => (
          <div key={index} className="home-02">
            <div>{data.ppdId}</div>
            <div>Add image here</div>
            <div>{data.propertyType}</div>
            <div>{data.contact}</div>
            <div>{data.area}</div>
            <div>{data.views}</div>
            <div>{data.status}</div>
            <div>{data.daysLeft}</div>
            <div>Add action button here</div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Home;
