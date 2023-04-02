import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import image2 from "./images/logo1.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/SocialMedia.css";
function SocialMedia() {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  let phoneNumber = "0";
  let message = "!";
  const urlWhatSap = () => {
    phoneNumber = "201026249568"; // replace with the phone number you want to chat with
    message = "Hello!"; // replace with the message you want to send
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`

      //`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };
  useEffect(() => {
    urlWhatSap();
  }, []);
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
              <a
                className="a-tag"
                href="mailto:oramahmoud6@gmail.com?subject=Contact for Advertisement&body=Hello"
                target="_blank"
              >
                Haodag@gmail.com
              </a>
            </div>
            <div className="sml-social-cont">
              <Link to="/" className="aLink-SocialMedia color-whatsapp">
                <FaWhatsapp className="icon-SocialMedia" />
              </Link>

              <a className="a-tag" href={whatsappUrl} target="_blank">
                Haodag (Whatsap)
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
