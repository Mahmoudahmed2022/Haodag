import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../Css/NavbarWithSideBar.css";
import { IconContext } from "react-icons";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import image2 from "./images/logo.png";
import { BiSearch } from "react-icons/bi";

function NavbarWithSideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <div className="left">
            
            <div className="svgColor1">
              <FaArrowCircleLeft className="bigger" />
              <FaArrowCircleRight className="bigger" />
            </div>
            <Link to="/" className="menu-bars">
              <FaAlignLeft className="svgColor" onClick={showSidebar} />
            </Link>
          </div>
          <div className="right2">
            <div className="search-bar">
              <div className="search-bar-content">
                <Link className="search-stick">
                  <BiSearch className="svg10" />
                </Link>

                <div className="search-text-and-rect">
                  <div className="rect"></div>
                  <input className="input1" placeholder="Search or type" />
                </div>
              </div>
            </div>
            <div className="right">
              <Link className="logo">
                <img className="avatar" src={image2} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle ">
              <Link to="#" className="menu-bars svgColor hoverOnX">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className="aAll  " to={item.path}>
                    {item.icon}
                    <span className="svgColor">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {/* {SidebarBottomData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarWithSideBar;
