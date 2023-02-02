import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import image2 from "./images/logo1.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import "../Css/SocialMedia.css";
function SocialMedia() {
  return (
    <>
      <div className="big-SocialMedia-text-container">
        <div className="header-SocialMedia-text">
          <h2>Social media</h2>
        </div>
        <div className="body-SocialMedia-text">
          {" "}
          <div className="top-SocialMedia">
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-facebook">
                <FaFacebook className="icon-SocialMedia " />
              </Link>
              <a className="a-tag" href="#">
                Haodag
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia git">
                <FaGithub className="icon-SocialMedia" />
              </Link>
              <a className="a-tag" href="#">
                Haodag
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-linkden">
                <FaLinkedin className="icon-SocialMedia" />
              </Link>
              <a className="a-tag" href="#">
                Haodag
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-google">
                <FaGooglePlus className="icon-SocialMedia" />
              </Link>
              <a className="a-tag" href="#">
                Haodag@gmail.com
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-whatsapp">
                <FaWhatsapp className="icon-SocialMedia" />
              </Link>
              <a className="a-tag" href="#">
                01154184217
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-twitter">
                <FaTwitterSquare className="icon-SocialMedia" />
              </Link>
              <a className="a-tag" href="#">
                Haodag@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SocialMedia;
