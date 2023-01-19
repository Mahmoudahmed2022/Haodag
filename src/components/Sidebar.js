import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";

import { FaMale } from "react-icons/fa";
import "./App.css"
import { Link } from "react-router-dom";
import "./sidebar.css";
import image from "./images/logo1.png";

function Sidebar() {
  return (
    <>
      <div className="sidebar-box open">
        <div className="toggle-setting">
          <FaCog className="fa-gear"  />
        </div>
        <div className="Allsidebar ">
          <div className="content1">
            <ul className="sidebar-top">
              <div className="Alllogo">
                <Link to="/home">
                  <img src={image} alt="logo"></img>
                </Link>
              </div>
              <li>
                <div>
                  <GoDashboard />
                  <Link to="/dashboard">Dashboard</Link>
                </div>
              </li>
              <li>
                <div>
                  <FaHome />
                  <Link to="/home">Home</Link>
                </div>
              </li>
              <li>
                <div>
                  <FaHandsHelping />
                  <Link to="/suggested-halls">Suggested Halls</Link>
                </div>
              </li>
              <li>
                <div>
                  <FaMale />
                  <Link to="/wedding-planners">Wedding Planners</Link>
                </div>
              </li>
              <li>
                <div>
                  <BiPackage />
                  <Link to="/dashboard">Great Packages</Link>
                </div>
              </li>
            </ul>
            <ul className="sidebar-bottom">
              <li className="setting">
                <div className="calender">
                  <div className="message">
                    <FaCog />

                    <a href="#">Settings</a>
                  </div>
                </div>
              </li>

              <li className="setting">
                <div className="calender">
                  <div className="message">
                    <AiOutlineLogout />

                    <Link to="/login">Log Out</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
