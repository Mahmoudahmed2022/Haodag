import React from "react";
// import landing from "./images/download (1).jfif";
import "../Css/Search.css";
import { HiSearchCircle } from "react-icons/hi";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <>
      <NavbarWithSideBar />

      <div className="search-page-container">
        <div className="landing-container">
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
                <button type="submit" className="search-btn">
                  <IoMdSearch className="search-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="halls-result">halls</div>
      </div>
    </>
  );
}
export default Search;
