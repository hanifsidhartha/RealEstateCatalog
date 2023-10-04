import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";
import "../styles/Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [ppdIds, setPpdIds] = useState([]);

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

        const response = await fetch(
          // Make a GET request using the fetch API
          "http://localhost:5001/list-properties",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
        const generatedPpdIds = responseData.data.map(() => {
          const nextPPDId = `PPD${ppdCounter.current}`;
          ppdCounter.current += 1;
          return nextPPDId;
        });
        setPpdIds(generatedPpdIds);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, [token]);

  const handleViews = () => {
    navigate("/layout/ViewsData");
  };

  const handleEditData = (id) => {
    navigate(`/layout/basicinfo/${ppdIds}`);
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      toast.error("Please enter a search query");
      return;
    }
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchQuery }),
      };
      const response = await fetch(
        "http://localhost:5001/search-properties",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      if (responseData.results.length === 0) {
        toast.info("No matching data found");
      } else {
        setData(responseData.results);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // const columns = [
  //   {
  //     name: "PPD ID",
  //     selector: (row) => row.ppdId,
  //   },
  //   {
  //     name: "Image",
  //     selector: (row) => row.image,
  //   },
  //   {
  //     name: "Property",
  //     selector: (row) => row.property,
  //   },
  //   {
  //     name: "Contact",
  //     selector: (row) => row.contact,
  //   },
  //   {
  //     name: "Area",
  //     selector: (row) => row.area,
  //   },
  //   {
  //     name: "Views",
  //     selector: (row) => row.views,
  //   },
  //   {
  //     name: "Status",
  //     selector: (row) => row.status,
  //   },
  //   {
  //     name: "Days Left",
  //     selector: (row) => row.daysLeft,
  //   },
  //   {
  //     name: "Action",
  //     selector: (row) => row.action,
  //   },
  // ];

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
        {/* 
        {data?.data?.map((data, index) => (
          <div key={index} className="home-02">
            <div>{ppdIds[index]}</div>
            <div>{data.image}</div>
            <div>{data.property_type}</div>
            <div>{data.contact}</div>
            <div>{data.area}</div>
            <div>{data.views}</div>
            <div>{data.status}</div>
            <div>{data.days_left}</div>
            <div>
              <div className="action-button" onClick={() => handleViews()}>
                <img src={ImgUrl?.Views} alt="pic missing" />
              </div>
              <div
                className="action-button"
                onClick={() => handleEditData(index)}
              >
                <img src={ImgUrl.Edit} alt="pic missing" />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Home;
