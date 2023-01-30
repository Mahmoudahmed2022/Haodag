import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import image2 from "./images/logo1.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import "../Css/Footer.css";
function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="footer">
          <div className="top-footer">
            <div className="top-left-footer">
              <Link to="/" className="aLink color-facebook">
                <FaFacebook className="icon-footer " />
              </Link>
              <Link to="/" className="aLink">
                <FaGithub className="icon-footer" />
              </Link>
              <Link to="/" className="aLink color-linkden">
                <FaLinkedin className="icon-footer" />
              </Link>
              <Link to="/" className="aLink color-google">
                <FaGooglePlus className="icon-footer" />
              </Link>
              <Link to="/" className="aLink color-whatsapp">
                <FaWhatsapp className="icon-footer" />
              </Link>
              <Link to="/" className="aLink color-twitter">
                <FaTwitterSquare className="icon-footer" />
              </Link>
            </div>
            <div className="top-right-footer">
              <Link className="link-footrer" to="/">
                Who We Are
              </Link>
              <Link className="link-footrer" to="/">
                Contact Us
              </Link>
              <Link className="link-footrer" to="/termsofuse">
                Terms Of Use
              </Link>
              <Link className="link-footrer" to="/">
                Call Us
              </Link>
            </div>
          </div>
          <div className="bottom-footer">
            <p className="copyRight">
              ِAll Rights Reserved To The Team of{" "}
              <Link to="/" className="avatar1">
                HAODAG
                {/* <img className="avatar1" src={image2} alt="" /> */}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
