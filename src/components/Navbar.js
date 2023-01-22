import React from "react";
import "../Css/App.css";
import "../Css/Navbar.css";
import image2 from "./images/logo.png";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="content">
          <div className="right">
            <img className="avatar" src={image2} />
          </div>
          <div className="search-bar">
            <div className="search-bar-content">
              <BiSearch />

              <div className="search-text-and-rect">
                <div className="rect"></div>
                <input className="input1" placeholder="Search or type" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
