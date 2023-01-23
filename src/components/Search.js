import React from "react";
// import landing from "./images/download (1).jfif";
import "../Css/Search.css";
import Navbar from "./Navbar";
import { HiSearchCircle } from "react-icons/hi";
function Search() {
  return (
    <>
      <Navbar />
      <div className="search-page-container">
        <div className="landing-container">
          <div className="search-box">
            <p className="sml-landing-text">It's simple and smart</p>
            <p className="big-landing-text">Search , Find & Book</p>

            <div className="search-form-container">
              <form className="search-form">
                <div className="city">
                  <label className="price-label">Choose your city</label>

                  <select>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alex">Alex</option>
                  </select>
                </div>
                <div className="price">
                  <label className="price-label">Type your price</label>
                  <input type="text" className="price-input" required />
                </div>
                <button type="submit" className="search-btn">
                  <HiSearchCircle className="search-icon" />
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
