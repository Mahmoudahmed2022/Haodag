import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Main Pages/Redux";
import Swal from "sweetalert2";

const Planners = ({ userData, isLogin, Plan }) => {
  const [plans, setplan] = useState([]);
  const [visible, setVisible] = useState(5);
  const personData = useContext(MyContext);
  const navigate = useNavigate();
  // console.log(userData);
  // console.log(Plan);

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
        // console.log("Data received from server:", data);
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

  const deletePlan = (user) => {
   
      Swal.fire({
        title: `Are You Sure To Delete Plan (${user.name}) `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/planner/auth/deletePlan/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message)
              window.location.reload();
            });
        }
      });
    
  };
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
              {personData.role==="planner"&&( <button
                onClick={() => deletePlan(data)}
                className="buttonMain delete"
              >
                Delete
              </button>)}
           
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
