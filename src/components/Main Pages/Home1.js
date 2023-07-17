import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import owners from "../images/owners1.png";
import planners from "../images/planners.png";
import suppliers from "../images/suppliers2.png";
import clients from "../images/clients1.png";
import shape1 from "../images/shape.png";

import { Link, useNavigate } from "react-router-dom";
import "../../Css/App.css";
import "../../Css//Home1.css";
import image11 from "../images/12.jpeg";
import couples from "../images/couples.png";
import NewCardTemplate from "../Secondary Pages/Cards/NewCardTemplate";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "./Redux";
import Swal from "sweetalert2";
import CardMotionHome from "../Secondary Pages/Cards/CardMotionHome";
function Home() {
  const personData = useContext(MyContext);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);
  const nav = useNavigate();
  const allCardData = () => {
    if (personData.token) {
      fetch("http://127.0.0.1:8000/api/auth/getRecommendations", {
        method: "GET",
        headers: {
          "auth-token": `${personData.token}`,
          Authorization: `Bearer${personData.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCardData(data.halls);
          // console.log("recommendation",data.halls)
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch("http://127.0.0.1:8000/api/auth/getAllHalls")
        .then((response) => response.json())
        .then((data) => {
          setCardData(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };
  // console.log(cardData)

  useEffect(() => {
    if (personData.isLogin === "false") {
      personData.setIsLogin(false);
    }
    if (personData.isLogin === "true" || personData.token) {
      personData.setIsLogin(true);
    }
  }, [personData.isLogin]);

  useEffect(() => {
    allCardData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <NavbarWithSideBar />

      <div className="home-landing">
        <div className="all-content">
          <h1 className="head-text">
            Discover exquisite wedding halls that will make your special day
            unforgettable.
          </h1>
          {/* <div className="text-content1">
            <div className="text-content2">
              <h1 className="head-text">
              Discover exquisite wedding halls that will make your special day unforgettable.
              </h1>
              <p className="p-info">
                We want your comfort, so we have created our website to make it
                easier for you to choose the right hall for your wedding.
                Enjoy a seamless and stress-free wedding planning experience with our dedicated team,
                Experience personalized service and attention to detail for your wedding 
              </p>
          
              
            </div>
          </div>

          <div className="left-side">
          

            <img className="left-photo" src={couples} alt="left photo"></img>
          </div> */}
        </div>
      </div>

      <h1 className="CardSSecondMod">How to Plan a Wedding</h1>
      <div className="ContCardsMotion">
        <CardMotionHome
          image={planners}
          content="My role is to plan and organize whole wedding "
          name="I'm Planner"
        />
        <CardMotionHome
          image={suppliers}
          content="My role is to provide you with everything you need away from the management of the hall"
          name="I'm Owner"
        />
        <CardMotionHome
          image={owners}
          content="i have a hall you can communicate with me to reserve it"
          name="I'm Supplier"
        />

        <CardMotionHome
          image={clients}
          content="We are the clients who have booked the halls and contracted with the party planners and suppliers"
          name="We Are Clients"
        />
      </div>
{personData.token ?(      <h1 className="headForHalls animate">Our Recommendation For You</h1>
):(      <h1 className="headForHalls animate">Our Halls</h1>
)}

      <div className="home-allhalls-container animate">
        {cardData?.slice(0, visible)?.map((data, index) => (
          <NewCardTemplate key={index} cardData={data} />
        ))}{" "}
      </div>
      <div className="for-button">
        {visible < cardData.length && (
          <a className="more" onClick={loadMore}>
            Load 5 More
          </a>
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
              <form
                className="login-form1"
                action={`mailto:Haowdag@gmail.com?subject=New message from ${name}&body=${message}`}
                method="post"
              >
                <div className="user-box1">
                  <FaUserAlt className="svg1" />
                  <input
                    type="text"
                    name=""
                    className="email-input1 e-p-input1"
                    required=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="e-p-label">Name</label>
                </div>

                <div className="user-box1">
                  <label className="textArea">Write Your Message</label>
                  <input
                    type="text"
                    name=""
                    required=""
                    className="password-input1 e-p-input1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="login-submit1 submit1" type="submit">
                  Send
                </button>
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