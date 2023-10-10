import React , {useState} from "react";
import { NavLink, useLocation} from "react-router-dom"; // Import NavLink
import "../styles/ViewsData.css";
import Modal from "react-modal"; // Import Modal


const ViewsDataGeneral = () => {

  const location = useLocation();

  const viewData = location.state;
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const modalStyle = {
    content: {
      width: "300px",
      height: "400px",
      margin: "auto",
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "10px", // Adjust the border radius as needed
      outline: "none",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", // Center the image vertically
    },
  };



  return (
    <>
      <h1>Property Details</h1>
      <div className="property">
        <div className="property-form property-form-view">
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="name">Name</label>
              <input value={viewData?.name}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="postedBy">Posted By</label>
              <input value={viewData?.postedBy}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="featuredPackage">Featured Package</label>
              <input value={viewData?.featuredPackage}/>
            </div>
            <div className="View-form-row">
              <div className="imge" onClick={() => openImageModal(viewData?.photo)}>
                <label htmlFor="addPhoto">Picture</label>
                <img src={`${viewData?.photo}`} alt="missing" />
              </div>

            </div>
          </div>
          <div className="form-section">
            <div className="View-form-row">
              <label htmlFor="mobile">Mobile</label>
              <input value={viewData?.mobile}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="saleType">Sale Type</label>
              <input value={viewData?.saleType}/>
            </div>
            <div className="View-form-row">
              <label htmlFor="ppdPackage">PPD Package</label>
              <input value={viewData?.ppdPackage}/>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/layout/viewsdatabasic" state={viewData} >BasicInfo</NavLink>
          <NavLink to="/layout/viewsdataproperty" state={viewData}>Property Details</NavLink>
          <NavLink to="/layout/viewsdatageneral" state={viewData}>General Info</NavLink>
          <NavLink to="/layout/viewsdatalocation" state={viewData}>Location Info</NavLink>
        </div>
      </div>
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Popup"
        style={modalStyle}
      >
        {selectedImage && (
          <img src={selectedImage} alt="popup" style={{ width: '100%', height: '100%' }} />
        )}
        <button onClick={closeImageModal}>Close</button>
      </Modal>

    </>
  );
};

export default ViewsDataGeneral;
