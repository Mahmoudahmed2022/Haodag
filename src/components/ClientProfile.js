import "../Css/ClientProfile.css";
import mahmoud from "./images/mahmoud (2).jpg";
import { Link } from "react-router-dom";
import "../Css/ClientProfile.css";
import Cards from "./Cards";
import "../Css/ClientProfile.scss";
import { useState } from "react";
import ModalEditClientProfile from "./ModalEditClientProfile";

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
      <div className="client-big-cont">
        <div className="cover-cont">
          <div className="prof-name">
            <h4>Name</h4>
            <h4>Type</h4>
          </div>
          <div className="pic-client-cont">
            <div className="client-profile-photo-cont">
              <img
                src={mahmoud}
                className="client-profile-photo"
                alt="user pic"
              />
            </div>
          </div>
        </div>
        <div className="client-info">
          <div className="contentProf">
            <div className="inputLable">
              <label htmlFor="Name">Name</label>
              <input
                id="Name"
                name="Name"
                className="allLable"
                disabled
                placeholder={formData.Name}
              />
            </div>
            <div className="inputLable">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                name="Email"
                className="allLable"
                disabled
                placeholder={formData.Name}
              />
            </div>{" "}
            <div className="inputLable">
              <label htmlFor="Phone">Phone</label>
              <input
                id="Phone"
                name="Phone"
                className="allLable"
                disabled
                placeholder={formData.Name}
              />
            </div>{" "}
            <div className="inputLable">
              <label htmlFor="Address">Address</label>
              <input
                id="Address"
                name="Address"
                className="allLable"
                disabled
                placeholder={formData.Name}
              />
            </div>{" "}
            <div className="inputLable">
              <label htmlFor="Gender">Gender</label>
              <input
                id="Gender"
                name="Gender"
                className="allLable"
                disabled
                placeholder={formData.Name}
              />
            </div>{" "}
          </div>

          <div className="editAndContactForProf">
            <div className="prof-btn-div">
              <Link
                className="btn-flip"
                data-back="Contact"
                data-front="Contact"
                to="#"
              ></Link>
            </div>
            <div className="prof-btn-div">
              <Link
                onClick={() => setShow(true)}
                className="btn-flip"
                data-back="Edit"
                data-front="Edit"
              ></Link>
              <ModalEditClientProfile
                onClose={() => setShow(false)}
                show={show}
                formData={formData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="booking-history">
        <h1 className="deals-tit">Last deals</h1>
        <Cards />
      </div>
    </>
  );
}

export default ClientProfile;
