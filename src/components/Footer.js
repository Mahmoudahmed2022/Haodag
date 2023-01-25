import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import image2 from "./images/logo1.png";

import { Link } from "react-router-dom";
import "../Css/Footer.css";
function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="footer">
          <div className="top-footer">
            <div className="top-left-footer">
              <Link to="/">
                <FaFacebook className="icon-footer" />
              </Link>
              <Link to="/">
                <FaGithub className="icon-footer" />
              </Link>
              <Link to="/">
                <FaLinkedin className="icon-footer" />
              </Link>
              <Link to="/">
                <FaGooglePlus className="icon-footer" />
              </Link>
            </div>
            <div className="top-right-footer">
              <Link className="link-footrer" to="/">
                Who We Are
              </Link>
              <Link className="link-footrer" to="/">
                Contact With Us
              </Link>
              <Link className="link-footrer" to="/">
                Terms Of Use
              </Link>
              <Link className="link-footrer" to="/">
                Call Us
              </Link>
            </div>
          </div>
          <div className="bottom-footer">
            <p className="copyRight">ِAll Rights Reserved To The Team of </p>
            <Link to="/">
              <img className="avatar1" src={image2} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
