import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";
import "../styles/Home.css";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";


const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  console.log(data?.data, "data");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [ppdIds, setPpdIds] = useState([]);

  const token = localStorage.getItem("token");
  const ppdCounter = useRef(1101);

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
        setOriginalData(responseData);
        const generatedPpdIds = responseData.data.map(() => {
          const nextPPDId = `PPD${ppdCounter.current}`;
          ppdCounter.current += 1;
          return nextPPDId;
        });
        const dataWithPpdIds = responseData.data.map((item, index) => ({
          ...item,
          ppdId: generatedPpdIds[index],  // Add ppdId property to each item
        }));
        setData({ ...responseData, data: dataWithPpdIds });  
        setOriginalData({ ...responseData, data: dataWithPpdIds });  
        setPpdIds(generatedPpdIds);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, [token]);

  const handleViews = async (id, isEdit) => {
    const payload = {property_id: id}
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      };
      const response = await fetch(
        `http://localhost:5001/view-property/`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      console.log(responseData,"*****************");

      
      if (responseData.code === 200) {
        // const propertyData = responseData.property;
        localStorage.setItem("propertyData",responseData?.data)
        // Redirect to the ViewsDatabasic route and pass the property data as props
        navigate(isEdit ? `/layout/basicinfo/edit/${id}` : "/layout/viewsdatabasic", { state: responseData?.data });
      } else {
        toast.info("No matching data found");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // const handleEditData = (id) => {

  //   const payload = {property_id: id}
  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload)
  //     };
  //     const response = await fetch(
  //       `http://localhost:5001/view-property/`,
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const responseData = await response.json();

  //     console.log(responseData,"*****************");

      
  //     if (responseData.code === 200) {
  //       // const propertyData = responseData.property;
  //       localStorage.setItem("propertyData",responseData?.data)
  //       // Redirect to the ViewsDatabasic route and pass the property data as props
  //       navigate("/layout/viewsdatabasic", { state: responseData?.data });
  //       navigate(`/layout/basicinfo/edit/${id}`);

  //     } else {
  //       toast.info("No matching data found");
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  //   // console.log(id , "if");
  //   // navigate(`/layout/basicinfo/edit/${id}`);
  // };

  const handleSearchInput = (e) =>{

    setSearchQuery(e);
    if(e && data?.data?.length){
      const origData = [...data?.data];
      const filteredData = origData.filter(res => res.ppdId.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
      console.log(e,"-----------------", data?.data, origData,"***",filteredData);
      // console.log("filtereddddd data", filteredData);
      setData({data:filteredData});
    }else{
      setData(originalData)
    }
  }

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
        body: JSON.stringify({ ppdId: searchQuery }),
      };
      const response = await fetch(
        "http://localhost:5001/search-by-ppdId",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      if (responseData.properties.length === 0) {
        toast.info("No matching data found");
      } else {
        console.log(responseData?.properties, "result");
        setData(responseData.properties);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  
  const columns = [
    {
      name: <strong>PPD ID</strong>,
      selector: (row) => row.ppdId,
    },
    {
      name: "Image",
      selector: (row) => <img src={row["image"]} alt="photo"/>,
    },
    {
      name: <strong>Property</strong>,
      selector: (row) => row.property_type,
    },
    {
      name: <strong>Contact</strong>,
      selector: (row) => row.contact,
    },
    {
      name: <strong>Area</strong>,
      selector: (row) => row["area"],
    },
    {
      name: <strong>Views</strong>,
      selector: (row) => row["views"],
    },
    {
      name: <strong>Status</strong>,
      selector: (row) => row["status"],
    },
    {
      name: <strong>Days Left</strong>,
      selector: (row) => row["days_left"],
    },
    {
      name: <strong>Action</strong>,
      selector: (row) => (
        <>
          <div>
            <div className="action-button" onClick={() => handleViews(row.ppp_id)}>
              <img src={ImgUrl?.Views} alt="pic missing" />
            </div>
            <div className="action-button" onClick={() => handleViews(row?.ppp_id, true)}>
              <img src={ImgUrl.Edit} alt="pic missing" />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="home">
        <div className="home-01">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search PPD ID"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
            />
            <img
              src={ImgUrl.Search}
              alt="Search icon"
              className="search-icon"
              // onClick={handleSearch}
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

        {/* <div className="home-02">
          <div className="heading">PPD ID</div>
          <div className="heading">Image</div>
          <div className="heading">Property</div>
          <div className="heading">Contact</div>
          <div className="heading">Area</div>
          <div className="heading">Views</div>
          <div className="heading">Status</div>
          <div className="heading">Days Left</div>
          <div className="heading">Action</div>
        </div> */}
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
      {console.log(data?.data,"==============")}
      <DataTable columns={columns} data={data?.data} pagination  />
    </>
  );
};

export default Home;
