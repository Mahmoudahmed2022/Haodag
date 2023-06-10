import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Main Pages/Redux";

const Planners = ({ userData, isLogin, Plan }) => {
  const [plans, setplan] = useState([]);
  const [visible, setVisible] = useState(5);
  const personData = useContext(MyContext);
  const navigate = useNavigate();
  console.log(userData);
  console.log(Plan);

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
    if (userData?.role === "planner") fetchplans();
  }, []);
  const  handleDetailsClick= (plan)=> {
    navigate(`/Plandetails/${plan.id}`, {
      state: { plan: plan },
    });
  }

  // const renderCard = (plan) => {
    // const  handleDetailsClick= (plan)=> {
    //   navigate(`/Plandetails/${plan.id}`, {
    //     state: { plan: plan },
    //   });
    // }
  
  //   return (
  //     <>
  //       <div className="planD" key={plan.id}>
  //       <img
  //             src={plan.photos[0]}
  //             alt={plan.name}
  //             className="banner-image"
  //           />
  //         <div className="wrapper">
            
  //           <div className="pad20">
  //             <h1> {plan.name}</h1>
  //             <p>{plan.price}$</p>
  //           </div>
  //           <div className="button-wrapper">
  //             <button
  //               onClick={() => handleDetailsClick(plan)}
  //               className="buttonMain details"
  //             >
  //               DETAILS
  //             </button>
  //           </div>
  //         </div>
  //       </div>{" "}
  //     </>
  //   );
  // };
 
  return (
    <>
      {userData?.role === "planner" && (
        <h1 className="section-heading">Wedding Plans</h1>
      )}
      <div className="profile-content">
  {plans.length > 0 ? (
    <>
      {plans.slice(0, visible).map((data, index) => (
        <div className="planD" key={data.id}>
          <img
            src={data.photos[0]}
            alt={data.name}
            className="banner-image"
          />
          <div className="wrapper">
            <div className="pad20">
              <h1>{data.name}</h1>
              <p>{data.price}$</p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() => handleDetailsClick(data)}
                className="buttonMain details"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  )}
</div>

    </>
  );
};
export default Planners;
{/* <div className="for-button">
                         {visible < plans.length && (
                           <button className="more" onClick={loadMore}>
                             Load 5 More
                           </button>
                         )}
                       </div> */}