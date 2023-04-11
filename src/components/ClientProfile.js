import "../Css/ClientProfile.css";
import mahmoud from "./images/mahmoud (2).jpg";
import { Link } from "react-router-dom";
import "../Css/ClientProfile.css";
import Cards from "./Cards";
import "../Css/ClientProfile.scss";
import { useState } from "react";
import HeaderDataProfile from "./HeaderDataProfile";

function ClientProfile() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    Phone: "",
    Gender: "",
    Email: "",
  });

  return (
    <>
      <div className="profile-container">
        <div className="smallParent">
          {/* <HeaderDataProfile formData={formData} /> */}
          <div className="booking-history">
            <h1 className="deals-tit">Last deals</h1>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientProfile;
