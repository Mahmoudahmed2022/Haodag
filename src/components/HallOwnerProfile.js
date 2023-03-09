import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import omar from "./images/omar.jpg";
import "../Css/ClientProfile.scss";
import "../Css/HallOwnerProfile.css";
import axios from "axios";
import { FaParking } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdDirectionsCarFilled } from "react-icons/md";
function HallOwnerProfile() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    console.log(email, name, message);
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", { email, name, message })
      .then((data) => {
        console.log(data);
      });
  };
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const allCardData = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setCardData(data.data);
    });
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (cardData) => {
    return (
      <>
        <div className="home-hall-container" key={cardData.id}>
          <div className="home-hall-img-div">
            <img
              className="home-hall-img"
              src={cardData.image}
              alt={cardData.title}
            ></img>
            {cardData.title.slice(0, 20)}
          </div>
          <div className="home-hall-body">
            <Link
              to="/hallDetails"
              className="home-details-btn s-d-hover"
              href="#"
            >
              Details
            </Link>
          </div>
        </div>
      </>
    );
  };

  const renderCard2 = (cardData) => {
    return (
      <>
        <div className="containerHalls" key={cardData.id}>
          <div className="RigthAndLeft">
            <div className="imageForHall">
              <img
                className="imginside"
                src={cardData.image}
                alt={cardData.title}
              ></img>
            </div>
            <div className="rightContentInfo">
              <div>
                <h2>Hall Name</h2>
                <div className="iconsForDiscription">
                  <MdFastfood />
                  <MdEmojiFoodBeverage />
                  <MdDirectionsCarFilled />
                  <FaParking />
                </div>
              </div>

              <div className="priceAndLocation">
                <div className="priceHall">
                  <p>{cardData.price}$</p>
                </div>
                <div>
                  <p>
                    {" "}
                    {cardData.title}
                    <MdLocationPin />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lastButtonForDetails">
            <Link className="lastButtonForDetails-button" to="/hallDetails">
              Details
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="hallowner-big-cont">
        <div className="hallowner-cover-cont">
          {/*  <img
        src={cover}
        className="planner-profile-cover"
        alt="planner cover"
/>*/}
          <div className="hallowner-div">
            <label className="hallowner-name">Omar Salama</label>
            <label className="role-type">Hall Owner</label>
          </div>
          <div className="pic-hallowner-cont">
            <div className="hallowner-profile-photo-cont">
              <img
                src={omar}
                className="hallowner-profile-photo"
                alt="Hallowner pic"
              />
            </div>
          </div>
        </div>
        <div className="hallowner-info">
          <div className="hallowner-name-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">Name</label>
            <label className="hallowner-data hallowner-all-label">
              Omar Salama
            </label>
          </div>
          <div className="hallowner-email-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">Email</label>
            <label className="hallowner-data hallowner-all-label">
              OmarSalama@gmail.com
            </label>
          </div>
          <div className="hallowner-address-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">
              Address
            </label>
            <label className="hallowner-data hallowner-all-label">
              Egypt-cairo-elsalam
            </label>
          </div>
          <div className="hallowner-nationalid-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">
              National Id
            </label>
            <label className="hallowner-data hallowner-all-label">
              30105012102357
            </label>
          </div>
          <div className="hallowner-phone-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">
              Phone Number
            </label>
            <label className="hallowner-data hallowner-all-label">
              01154184217
            </label>
          </div>
          <div className="hallowner-gender-div hallowner-sml-cont">
            <label className="hallowner-label hallowner-all-label">Gendr</label>
            <label className="hallowner-data hallowner-all-label">Male</label>
          </div>
          <div className="hallowner-prof-btn-div">
            <Link
              className="btn-flip"
              data-back="Contact"
              data-front="Contact"
              to="#"
            ></Link>
          </div>
          <div className="hallowner-prof-btn-div">
            <Link
              className="btn-flip"
              data-back="Edit"
              data-front="Edit"
              to="#"
            ></Link>
          </div>
        </div>
        <div className="halls">
          <div className="home-allhalls-container">
            {cardData.slice(0, visible).map(renderCard2)}
          </div>
          <div className="for-button">
            {visible < cardData.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HallOwnerProfile;
