import "../Css/ClientProfile.css";
import mahmoud from "./images/mahmoud (2).jpg";
import { Link } from "react-router-dom";
import "../Css/ClientProfile.css";
import Cards from "./Cards";
function ClientProfile() {
  return (
    <>
      <div className="client-big-cont">
        <div className="cover-cont">
          <div className="prof-name">
            <label className="usr-name">Mahmoud Ahmed</label>
            <label className="role-type">Client</label>
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
          <div className="client-name-div sml-cont">
            <label className="client-label all-label">Name</label>
            <label className="client-data all-label">Mahmoud Ahmed</label>
          </div>
          <div className="client-email-div sml-cont">
            <label className="client-label all-label">Email</label>
            <label className="client-data all-label">Mahmoud@gmail.com</label>
          </div>
          <div className="client-address-div sml-cont">
            <label className="client-label all-label">Address</label>
            <label className="client-data all-label">
              Egypt-giza-elhawmdya
            </label>
          </div>
          <div className="client-nationalid-div sml-cont">
            <label className="client-label all-label">National Id</label>
            <label className="client-data all-label">30105012102357</label>
          </div>
          <div className="client-phone-div sml-cont">
            <label className="client-label all-label">Phone Number</label>
            <label className="client-data all-label">01154184217</label>
          </div>
          <div className="client-gender-div sml-cont">
            <label className="client-label all-label">Gendr</label>
            <label className="client-data all-label">Male</label>
          </div>
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
              className="btn-flip"
              data-back="Edit"
              data-front="Edit"
              to="#"
            ></Link>
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
