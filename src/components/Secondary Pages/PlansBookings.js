import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Css/WeddingPlanners.css";
import "../../Css/Reservation.css";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
function PlansBookings() {
  const personData = useContext(MyContext);
  const [bookings, setBookings] = useState([]);
  const getBookings = () => {
    fetch("http://127.0.0.1:8000/user/auth/getUserAllPlanRequests", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  console.log(bookings);
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <div>
        <h1 className="reserve-tit">Plans Booking Requests</h1>
        <div className="reserv-big-cont">
          {bookings.length ? (
            bookings.map((Booking, index) => {
              return (
                <div className="reserv-sml-cont" key={Booking.id}>
                  <h3>Booking {index + 1}</h3>
                  <div className="user-div">
                    <div className="user-info-div">
                      <h4>
                        {Booking.user_name}
                        <br />
                        {Booking.check_in_date}
                        <br />
                        {Booking.check_out_date}
                      </h4>
                    </div>
                  </div>
                  <div className="user-info-div">
                    <h5 className="hall-name">
                      {Booking.plan_name}
                      <br />
                      {Booking.price} $
                    </h5>
                  </div>
                  <div className="buttons">
                    {Booking.status === "confirmed" ? (
                      <button className="accept-btn reserve-btn pln-btn">
                        Confirmed
                      </button>
                    ) : null}

                    {Booking.status === "cancelled" ? (
                      <button className="decline-btn reserve-btn pln-btn">
                        Cancelled
                      </button>
                    ) : null}

                    {Booking.status === "unconfirmed" ? (
                      <button className="view-btn reserve-btn pln-btn">
                        Unconfirmed
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h2>No Booking found...</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PlansBookings;
