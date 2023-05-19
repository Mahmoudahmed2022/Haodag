import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Planners = ({ userData, userToken,isLogin }) => {
  const [plan, setplan] = useState([]);
  const [visible, setVisible] = useState(5);

  const navigate = useNavigate();

  const fetchplans = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getAllPlannerPlans/${userData.id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setplan(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const loadMore = () => {
    setVisible(visible + 5);
  };
  useEffect(() => {
    if(userData.role==="planner")
    fetchplans();
  }, []);
  function handleDetailsClick(plan_Id, plan) {
    navigate(`/Plandetails/${plan_Id}`, {
      state: { data: userToken, plan: plan, userData: userData },
    });
  }
  const renderCard = (plan) => {
    return (
      <>
        <div className="planD" key={plan.id}>
          <div className="wrapper">
            {/* <div class="banner-image"> </div> */}
            <img
              src={plan.photos[0]}
              alt={plan.name}
              className="banner-image"
              //  className="plan-image"
            />
            <div className="pad20">
              <h1> {plan.name}</h1>
              <p>{plan.price}$</p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() => handleDetailsClick(plan.id, plan)}
                className="btnForPlan outline"
              >
                DETAILS
              </button>
            </div>
            {/* <div>
              {isPlanner && (
                <FaTrash
                  className="delete"
                  onClick={() => deleteCourse(plan.id)}
                />
              )}
            </div> */}
          </div>
        </div>{" "}
      </>
    );
  };

  return (
    <>
     
        <>
          <h1 className="section-heading">Wedding Plans</h1>
          <div className="profile-content">
            {plan.length > 0 ? (
              <>
                {plan.slice(0, visible).map(renderCard)}
                <div className="for-button">
                  {visible < plan.length && (
                    <button className="more" onClick={loadMore}>
                      Load 5 More
                    </button>
                  )}
                </div>
              </>
            ) : (
              <></>

              )}
          </div>
        </>
      
    </>
  );
};
export default Planners;
