import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Css/WeddingPlanners.css";
import "../../Css/Reservation.css";
function PlansRequests() {
  const location = useLocation();
  const userToken = location?.state?.data;
  const [reservations, setReservations] = useState([]);
  const [confirmMessge, setConfirmMessge] = useState(
    "Booking confirmed successfully"
  );
  const [confirmedBooking, setConfirmedBooking] = useState({});
  const [rejectedBooking, setRejectedBooking] = useState({});
  const [rejectMessage, setRejectMessage] = useState(
    "Booking cancelled successfully"
  );
  const getReservations = () => {
    fetch("http://127.0.0.1:8000/planner/auth/getPlannerUnConfirmedBookings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function confirm(reservation_Id) {
    fetch(
      `http://127.0.0.1:8000/planner/auth/confirmBookingPlan/${reservation_Id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.token}`,
          "auth-token": `${userToken.token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setConfirmedBooking(data.data);
        setConfirmMessge(data.message);
        alert(confirmMessge);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function reject(reservation_Id) {
    fetch(
      `http://127.0.0.1:8000/planner/auth/rejectBookingPlan/${reservation_Id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.token}`,
          "auth-token": `${userToken.token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRejectedBooking(data.data);
        setRejectMessage(data.message);
        alert(rejectMessage);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  console.log(reservations);
  useEffect(() => {
    getReservations();
  }, []);
  return (
    <>
      <div>
        <h1 className="reserve-tit">Plans Requests</h1>
        <div className="reserv-big-cont">
          {reservations.length ? (
            reservations.map((reservation, index) => {
              return (
                <div className="reserv-sml-cont" key={reservation.id}>
                  <h3>Request {index + 1}</h3>
                  <div className="user-div">
                    <div className="user-info-div">
                      <h4>User name: {reservation.user_name}</h4>
                      <h5>{`check in date:       ${reservation.check_in_date}`}</h5>
                      <h5>{`check out date:      ${reservation.check_out_date}`}</h5>
                    </div>
                  </div>
                  <div className="user-info-div">
                    <h5 className="hall-name">
                      {`Plan name: ${reservation.plan_name}`}
                      <br />
                      {reservation.price} $
                    </h5>
                  </div>
                  <div className="buttons">
                    <button
                      className="accept-btn reserve-btn"
                      onClick={() => confirm(reservation.id)}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => reject(reservation.id)}
                      className="decline-btn reserve-btn"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h2>No Plans requests found...</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PlansRequests;
