import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image10 from "./images/animation.png";
import "../Css/Home1.css";
import "../Css/App.css";
import "../Css/Search.css";
import axios from "axios";
import image11 from "./images/12.jpeg";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";



function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    console.log(email, name, message);
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", { email, name , message })
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

  const renderCard = (person) => {
    return (
      <>
        <div className="hall-container" key={person.id}>
          <div className="img-div">
            <img
              className="hall-img"
              src={person.image}
              alt={person.title}
            ></img>
            {person.title}
          </div>
          <div className="hall-body">
            <button className="details-btn s-d-hover" href="#">
              Details
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="landing">
        <div className="all-content">
          <div className="text-content1">
            <div className="text-content2">
              <h1 className="head-text">
                All Because Two People Fell In Love.
              </h1>
              <p className="p-info">
                We want your comfort, so we have created our website to make it
                easier for you to choose the right hall for your wedding
              </p>
              <div className="buttons-log-reg">
                <Link className="glow-on-hover" to="/login">
                  Login
                </Link>
                <Link className="glow-on-hover" to="/registration">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          <div className="left-side">
            <div className="for-advertisment">
              {" "}
              <Link className="advertisment" to="/">
                To Put Your Advertisement
              </Link>
            </div>

            <img className="left-photo" src={image10} alt="left photo"></img>
          </div>
        </div>
      </div>
      <h1 className="headForHalls">Our Recommendation For You</h1>

      <div className="allhalls-container">
        {cardData.slice(0, visible).map(renderCard)}
      </div>
      <div className="for-button">
        {visible < cardData.length && (
          <button className="more" onClick={loadMore}>
            Load 5 More
          </button>
        )}
      </div>
<div className="clo">
      <div className="contact-us">
          <div className="left-details1">
            <div className="comp-row">
              <div className="first-row">
                <HiOutlinePhone className="svg1" />
                <p> Mobile Number</p>
              </div>
              <p>1(234)567-891</p>
            </div>
            <div className="comp-row">
              <div className="first-row">
                <GoLocation className="svg1" />
                <p> Location</p>
              </div>
              <p>Giza-Egypt</p>
            </div>
            <div className="comp-row">
              <div className="first-row">
                <HiOutlineMail className="svg1" />
                <p> Email For Contact</p>
              </div>
              <p>hawdag@email.com</p>
            </div>
          </div>
          <div className="right-form">
            <div className="login-box1">
              <h2 className="login-title">Contact Us</h2>
              <form className="login-form1" onSubmit={handleSubmit}>
                <div className="user-box1">
                  <FaUserAlt className="svg1" />
                  <input
                    type="text"
                    name=""
                    className="email-input1 e-p-input1"
                    required=""
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label className="e-p-label">Name</label>
                </div>
                <div className="user-box1">
                  <HiOutlineMail className="svg1" />
                  <input
                    type="email"
                    name=""
                    required=""
                    className="password-input1 e-p-input1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="e-p-label">Email</label>
                </div>
                <div className="user-box1">
                  <label className="textArea"  >Write Your Message</label>
                  <input
                    type="text"
                    name=""
                    required=""
                    className="password-input1 e-p-input1"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  
                  </div>
                <Link className="login-submit1 submit1" to="/WeddingPlanners">
                 
                  Send
                </Link>
                
              </form>
            </div>
          </div>
        </div>
        </div>

      <div className="about-us">
        <div className="left-photo-couple">
          <img className="photo100" src={image11} alt="photo"></img>
        </div>
        <div className="right-for-description">
          <h2 className="who-we-are">Who Are We</h2>
          <p className="descrition-about-us">
            We are a group of young people who aim to make it easier for users
            to find the most suitable halls for their events
          </p>
        </div>
      </div>
        
    </>
  );
}
export default Home;
