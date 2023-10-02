import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";

import "../styles/Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const ppdCounter = useRef(1125);

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
        // Initialize the counter with your starting value
        // setPpdCounter(1125);
      })
      .catch((fetchError) => {
        // Handle any errors that occurred during the fetch
        toast.error(fetchError);
      });
  }, [token]);

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
  const generateNextPPDId = () => {
    const nextPPDId = `PPD${ppdCounter.current}`;
    ppdCounter.current += 1; // Increment the counter for the next ID
    return nextPPDId;
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
            <div>{generateNextPPDId()}</div>
            <div>{data.addPhoto}</div>
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
