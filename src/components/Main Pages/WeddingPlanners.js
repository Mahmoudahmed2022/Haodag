import React from "react";
import "../../Css/WeddingPlanners.css";
import { useEffect, useState } from "react";
import user2 from "../images/user2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function WeddingPlanners() {
  const [planners, setPlanners] = useState([]);
  const [owners, setOwners] = useState([]);

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
  
  const loadMore = () => {
    setVisible(visible + 6);
  };
  console.log(planners);
  console.log(owners);

  useEffect(() => {
    allPlanners();
    allOwners();
  }, []);
  const renderCard = (user) => {
    function goToPlannerProfile() {
      navigate(`/${user.role}/${user.id}`,{state:{userData:user}});
    }
    
    return (
      <>
        <div className="planner-container" key={user.id}>
          <div className="img-planner-div">
            <img src={user2} className="planner-img" alt={user.title} />
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
      <div className="WeddingPlanners-container">
        <div>
          <h2>Wedding Planners</h2>
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
          <div>
            <h2>Hall Owners</h2>
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
        </div>
      </div>
    </>
  );
}

export default WeddingPlanners;
