import React from "react";
// import landing from "./images/download (1).jfif";
import "../Css/Search.css";
import "../Css/App.css";

import NavbarWithSideBar from "./NavbarWithSideBar";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import user from "./images/user.png";
function Search() {
  const [halls, setHalls] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setHalls(data));
  }, []);
  return (
    <>
      <NavbarWithSideBar />

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
          {halls.map((hall) => {
            return (
              <div className="hall-container" key={hall.id}>
                <div className="img-div">
                  <img src={hall.image} className="hall-img" alt={hall.title} />
                </div>
                <div className="hall-body">
                  <p className="hall-title">{hall.title.slice(0, 20)}</p>
                  <button className="details-btn s-d-hover" href="#">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Search;
