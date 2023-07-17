import React, { useEffect, useState } from "react";
import "../../Css/WeddingPlanners.css";
import "../../Css/Reservation.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import { MyContext } from "../Main Pages/Redux";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
function ServicesRequests() {
  const personData = useContext(MyContext);
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
    fetch(
      "http://127.0.0.1:8000/supplier/auth/getSupplierUnConfirmedSubReqests",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${personData.token}`,
          "auth-token": `${personData.token}`,
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
        setReservations(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function confirm(reservation_Id) {
    fetch(
      `http://127.0.0.1:8000/supplier/auth/confirmSubRequest/${reservation_Id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${personData.token}`,
          "auth-token": `${personData.token}`,
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
        Swal.fire({
          title: confirmMessge,
          showCancelButton: false,
        }).then((result) => {        
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function reject(reservation_Id) {
    fetch(
      `http://127.0.0.1:8000/supplier/auth/rejectSubRequest/${reservation_Id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${personData.token}`,
          "auth-token": `${personData.token}`,
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
        Swal.fire({
          title: rejectMessage,
          showCancelButton: false,
        }).then((result) => {
          
        });
        window.location.reload();

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  // console.log(reservations);
  useEffect(() => {
    getReservations();
  }, []);
  return (
    <>
      <NavbarWithSideBar />
      <div>
        <h1 className="reserve-tit">Services Requests</h1>
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
                      {`Plan name: ${reservation.sub_name}`}
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
              <h2>No Services requests found...</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ServicesRequests;
