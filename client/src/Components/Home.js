import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImgUrl from "../assets/images/ImgUrl";
import "../styles/Home.css";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import Modal from 'react-modal';


const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line
  const [ppdIds, setPpdIds] = useState([]);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


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
          "https://real-estate-catalog-u050.onrender.com/list-properties",
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
          ppdId: generatedPpdIds[index], // Add ppdId property to each item
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
    const payload = { property_id: id };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(
        `https://real-estate-catalog-u050.onrender.com/view-property`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData.code === 200) {
        // const propertyData = responseData.property;
        localStorage.setItem("propertyData", responseData?.data);
        // Redirect to the ViewsDatabasic route and pass the property data as props
        navigate(
          isEdit ? `/layout/basicinfo/edit/${id}` : "/layout/viewsdatabasic",
          { state: responseData?.data }
        );
      } else {
        toast.info("No matching data found");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  const handleSearchInput = (e) => {
    setSearchQuery(e);
    if (e && data?.data?.length) {
      const origData = [...data?.data];
      const filteredData = origData.filter((res) =>
        res.ppdId.toLocaleLowerCase().includes(e.toLocaleLowerCase())
      );
      setData({ data: filteredData });
    } else {
      setData(originalData);
    }
  };



  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const modalStyle = {
    content: {
      width: '500px',
      height: '500px',
      margin: 'auto',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      outline: 'none',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const columns = [
    {
      name: <strong>PPD ID</strong>,
      selector: (row) => row.ppdId,
    },
    {
      name: 'Image',
      selector: (row) => (
        <div onClick={() => openImageModal(row['image'])}>
          <img src={row['image']} alt="missing" style={{ cursor: 'pointer' }} />
        </div>
      ),
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
            <div
              className="action-button"
              onClick={() => handleViews(row.ppp_id)}
            >
              <img src={ImgUrl?.Views} alt="pic missing" />
            </div>
            <div
              className="action-button"
              onClick={() => handleViews(row?.ppp_id, true)}
            >
              <img src={ImgUrl?.Edit} alt="pic missing" />
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

      </div>
      <DataTable columns={columns} data={data?.data} pagination />
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Popup"
        style={modalStyle}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="popup"
            style={{ width: '100%', height: '100%', cursor: 'pointer' }}
            onClick={closeImageModal}
          />
        )}
      </Modal>

    </>
  );
};

export default Home;
