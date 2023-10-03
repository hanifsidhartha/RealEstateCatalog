import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";

import "../styles/Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const token = localStorage.getItem("token");
  const ppdCounter = useRef(1125);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        // Make a GET request using the fetch API
        const response = await fetch(
          "http://localhost:5001/list-properties",
          requestOptions
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, [token]);

  // delete record

  const handleDelete = async (id) => {
    try {
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

      const resp = await fetch(
        "http://localhost:5001/delete-property",
        deleteRequestOptions
      );
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await resp.json();

      if (
        responseData.code === 200 &&
        responseData.message === "Property ID is required"
      ) {
        toast.error("Property ID is required");
      } else {
        setData(responseData);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditData = (id) => {
    console.log("im edit", id);
  };
  const generateNextPPDId = () => {
    const nextPPDId = `PPD${ppdCounter.current}`;
    ppdCounter.current += 1; // Increment the counter for the next ID
    return nextPPDId;
  };

  const handleSearch = () => {
    if (!searchQuery) {
      toast.error("Please enter a search query");
      return;
    }

    // Send a POST request to the search endpoint in your Node.js API
    fetch("http://localhost:5001/search-properties", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: searchQuery }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Update the data state with the search results
        setData(responseData.results);
      })
      .catch((fetchError) => {
        // Handle any errors that occurred during the fetch
        toast.error(fetchError.message);
      });
  };
  return (
    <>
      <div className="home">
        <div className="home-01">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search PPD ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src={ImgUrl.Search}
              alt="Search icon"
              className="search-icon"
              onClick={handleSearch}
            />
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
