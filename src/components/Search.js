import React from "react";
// import landing from "./images/download (1).jfif";
import "../Css/Search.css";
import "../Css/App.css";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import user from "./images/user.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Search() {
  const [halls, setHalls] = useState([]);
  const [visible, setVisible] = useState(5);
  const allHalls = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setHalls(data.data);
    });
  };
  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allHalls();
  }, []);
  const renderCard = (hall) => {
    return (
      <>
        <div className="search-hall-container" key={hall.id}>
          <div className="search-img-div">
            <img
              className="search-hall-img"
              src={hall.image}
              alt={hall.title}
            ></img>
            {hall.title}
          </div>
          <div className="search-hall-body">
            <Link
              to="/hallDetails"
              className="search-details-btn s-d-hover"
              href="#"
            >
              Details
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="search-page-container">
        <div className="landing-container">
          {/* <div className="user-pic">
            <img src={user} alt="user pic" />
          </div> */}
          <div className="search-box">
            <div className="landing-text">
              <div className="sml-landing-text-container">
                <p className="sml-landing-text">It's simple and smart</p>
              </div>
              <div className="big-landing-text-container">
                <p className="big-landing-text">Search , Find & Book</p>
              </div>
            </div>
            <div className="search-form-container">
              <form className="search-form">
                <div className="city-div">
                  <select required className="city-input">
                    <option value="" disabled selected hidden>
                      Choose your city...
                    </option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alex">Alex</option>
                  </select>
                </div>

                <div className="price-div">
                  <input
                    type="number"
                    placeholder="Type your price"
                    className="price-input"
                    required
                  />
                </div>
                <div className="search-btn-div">
                  <button type="submit" className="search-btn s-d-hover">
                    <IoMdSearch className="search-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="allhalls-container">
          {halls.slice(0, visible).map(renderCard)}
        </div>
        <div className="for-button">
          {visible < halls.length && (
            <button className="more" onClick={loadMore}>
              Load 5 More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Search;
