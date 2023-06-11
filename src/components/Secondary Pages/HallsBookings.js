import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Css/WeddingPlanners.css";
import "../../Css/Reservation.css";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import photoHall from "../images/image.jpg";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
function HallsBookings() {
  const personData = useContext(MyContext);
  const isSupplier = personData?.role === "supplier";
  const isClient = personData?.role === "user";
  const [bookings, setBookings] = useState([]);
  const getBookings = () => {
    if (isClient) {
      fetch("http://127.0.0.1:8000/user/auth/getUserAllBookings", {
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
    } else if (isSupplier) {
      fetch("http://127.0.0.1:8000/supplier/auth/getSupplierAllSubReqests", {
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
    }
  };

  console.log(bookings);
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <NavbarWithSideBar />
      <div>
        <h1 className="reserve-tit"> Booking Requests</h1>
        <div className="reserv-big-cont">
          {isClient &&
            (bookings.length ? (
              bookings.map((Booking, index) => {
                return (
                  <div className="reserv-sml-cont" key={Booking.id}>
                    <img className="WH" src={photoHall} alt="no photo"></img>
                    <h3>Booking {index + 1}</h3>
                    <div className="user-div">
                      <h3>User: {Booking.user_name}</h3>
                      <h3>Hall Name: {Booking.hall_name}</h3>
                      <h3>
                        from {Booking.check_in_date} to {Booking.check_out_date}
                      </h3>
                      <h3>Price: {Booking.price} $</h3>
                    </div>

                    <div className="buttons">
                      {Booking.status === "confirmed" ? (
                        <button className="view-btn  pln-btn">Confirmed</button>
                      ) : null}

                      {Booking.status === "cancelled" ? (
                        <button className="decline-btn  pln-btn">
                          Cancelled
                        </button>
                      ) : null}

                      {Booking.status === "unconfirmed" ? (
                        <button className="view-btn  pln-btn">
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
            ))}

          {isSupplier &&
            (bookings.length ? (
              bookings.map((Booking, index) => {
                return (
                  <div className="reserv-sml-cont" key={Booking.id}>
                    <img className="WH" src={photoHall} alt="no photo"></img>
                    <h3>Booking {index + 1}</h3>
                    <div className="user-div">
                      <h3>User: {Booking.user_name}</h3>
                      <h3>Service Name: {Booking.sub_name}</h3>
                      <h3>
                        from {Booking.check_in_date}
                        <br /> to {Booking.check_out_date}
                      </h3>
                      <h3>Price: {Booking.price} $</h3>
                    </div>

                    <div className="buttons">
                      {Booking.status === "confirmed" ? (
                        <button className="view-btn  pln-btn">Confirmed</button>
                      ) : null}

                      {Booking.status === "cancelled" ? (
                        <button className="decline-btn  pln-btn">
                          Cancelled
                        </button>
                      ) : null}

                      {Booking.status === "unconfirmed" ? (
                        <button className="view-btn  pln-btn">
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
            ))}
        </div>
      </div>
    </>
  );
}

export default HallsBookings;
