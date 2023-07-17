import React from "react";
import "../../Css/WeddingPlanners.css";
import { useEffect, useState } from "react";
import user2 from "../images/user2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "./Redux";
function WeddingPlanners() {
   const personData = useContext(MyContext);
 
  const [planners, setPlanners] = useState([]);
  const [owners, setOwners] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const location = useLocation();
 
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allPlanners = () => {
    fetch("http://127.0.0.1:8000/api/auth/getAllPlanners")
      .then((response) => response.json())
      .then((data) => {
        setPlanners(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const allOwners = () => {
    fetch("http://127.0.0.1:8000/api/auth/getAllOwners")
      .then((response) => response.json())
      .then((data) => {
        setOwners(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const allSuppliers = () => {
    fetch("http://127.0.0.1:8000/api/auth/getAllSuppliers")
      .then((response) => response.json())
      .then((data) => {
        setSuppliers(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
// console.log("planners",planners);
// console.log("owners",owners)
// console.log("suppliers",suppliers)

  const loadMore = () => {
    setVisible(visible + 6);
  };


  useEffect(() => {
    allSuppliers()
    allPlanners();
    allOwners();
    window.scrollTo({ top: 0, behavior: "smooth" });

  }, []);
  const renderCard = (user) => {
    function goToPlannerProfile() {
      navigate(`/${user.role}/${user.id}`, { state: { userData: user } });
    }

    return (
      <>
        <div className="planner-container" key={user.id}>
          <div className="img-planner-div">
            <img src={user.photo} className="planner-img" alt={user.title} />
          </div>
          <div className="planner-body">
            <p className="planner-title">{user.name}</p>
            <button
              className="planner-details-btn s-d-hover"
              onClick={goToPlannerProfile}
            >
              Details
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <NavbarWithSideBar />

      <div className="WeddingPlanners-container">
        <div className="divWeddingPlanners"> 
          <h2 className="WeddingPlanners">Wedding Planners</h2>
        </div>
        <div className="Planners-container">
          <div className="allPlanners-container">
            {planners.slice(0, visible).map(renderCard)}
          </div>
          <div className="for-button">
            {visible < planners.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
          <div className="divWeddingPlanners">
            <h2 className="WeddingPlanners">Hall Owners</h2>
          </div>
          <div className="allPlanners-container">
            {owners.slice(0, visible).map(renderCard)}
          </div>
          <div className="for-button">
            {visible < owners.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>

          <div className="divWeddingPlanners">
            <h2 className="WeddingPlanners"> Suppliers</h2>
          </div>
          <div className="allPlanners-container">
            {suppliers.slice(0, visible).map(renderCard)}
          </div>
          <div className="for-button">
            {visible < owners.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingPlanners;
