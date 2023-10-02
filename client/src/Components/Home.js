import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";

import "../styles/Home.css";
import { toast } from "react-toastify";

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
  const [data, setData] = useState([]);
  console.log(data, "data");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Make a GET request using the fetch API
    fetch("http://localhost:5001/list-properties", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Set the fetched data in the state
        setData(responseData);
      })
      .catch((fetchError) => {
        // Handle any errors that occurred during the fetch
        toast.error(fetchError);
      });
  }, []);

  // delete record

  const handleDelete = (id) => {
    console.log("delete data", id);

    const deleteRequestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        property_id: id,
      }),
    };

    fetch("http://localhost:5001/delete-property", deleteRequestOptions)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((responseData) => {
        // Set the fetched data in the state
        if (
          responseData.code === 200 &&
          responseData.message === "Property ID is required"
        ) {
          // Handle the error here, e.g., display it to the user
          toast.error("Property ID is required");
        } else {
          setData(responseData);
        }
      })
      .catch((fetchError) => {
        // Handle any errors that occurred during the fetch
        toast.error(fetchError.message);
      });
  };

  const handleEditData = (id) => {
    console.log("im edit", id);
  };

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
        {data?.data?.map((data, index) => (
          <div key={index} className="home-02">
            <div>{data.ppp_id}</div>
            <div>Add image here</div>
            <div>{data.property_type}</div>
            <div>{data.contact}</div>
            <div>{data.area}</div>
            <div>{data.views}</div>
            <div>{data.status}</div>
            <div>{data.days_left}</div>
            <div>
              <button
                className="action-button"
                onClick={() => handleEditData(data)}
              >
                <img src={ImgUrl?.Edit} alt="pic missing" />
              </button>
              <button
                className="action-button"
                onClick={() => handleDelete(data.ppp_id)}
              >
                <img src={ImgUrl?.Delete} alt="pic missing" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
