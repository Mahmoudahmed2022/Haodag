import "../Css/Advertisement.css";
import { FaGooglePlus } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Advertisement() {
  return (
    <>
      <div className="big-Advertisement-text-container">
        <div className="header-Advertisement-text">
          <h2>Advertisement</h2>
        </div>
        <div className="body-Advertisement-text">
          <div className="sml-Advertisement-cont">
            <p className="adv-txt">contact with : </p>
            <div className="adv-log">
              <Link to="/" className="aLink-Advertisement color-whatsapp">
                <FaWhatsapp className="icon-Advertisement" />
              </Link>
              <a className="a-tag" href="#">
                01154184217
              </a>
            </div>
          </div>
          <div className="sml-Advertisement-cont">
            <p className="adv-txt">or email: </p>
            <div className="adv-log">
              <Link to="/" className="aLink-Advertisement color-google">
                <FaGooglePlus className="icon-Advertisement" />
              </Link>
              <a className="a-tag" href="#">
                Haodag@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement;
