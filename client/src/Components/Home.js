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
    const authToken = token;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
    };
    const deleteRequestOptions = {
      method: "DELETE",
      headers: { Authorization: authToken, "Content-Type": "application/json" },
    };

    // Make a GET request using the fetch API
    fetch(
      "https://02d02ba2-5227-46f2-b3d7-40fdc3a41bdc.mock.pstmn.io/list-properties",
      requestOptions
    )
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
    // https://02d02ba2-5227-46f2-b3d7-40fdc3a41bdc.mock.pstmn.io/delete-property
    console.log("delete data", id);

    // fetch(
    //   "https://02d02ba2-5227-46f2-b3d7-40fdc3a41bdc.mock.pstmn.io/delete-property",
    //   {
    //     ...deleteRequestOptions,
    //     body: {
    //       property_id: id,
    //     },
    //   }
    // ).then((resp) => {
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return response.json();
    // }).then((responseData) => {
    //   // Set the fetched data in the state
    //   setData(responseData);
    // })
    // .catch((fetchError) => {
    //   // Handle any errors that occurred during the fetch
    //   toast.error(fetchError);
    // });
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
