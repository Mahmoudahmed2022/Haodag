import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image10 from "./images/animation.png";
import "../Css/Home1.css";
import "../Css/App.css";

import "../Css/Search.css";
import NavbarWithSideBar from "./NavbarWithSideBar";
function Home() {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const allCardData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((cardData) => setCardData(cardData));
    console.log(cardData);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
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
        <button className="more" onClick={loadMore}>Load 5 More</button>
      )}
      </div>
    </>
  );
}
export default Home;
