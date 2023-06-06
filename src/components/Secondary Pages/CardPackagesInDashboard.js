import React, { useContext } from "react";

import {  useNavigate } from "react-router-dom";
import "../../Css/AdminDashboard.css";
import Swal from "sweetalert2";
import { MyContext } from "../Main Pages/Redux";

const CardPackagesInDashboard = ({ user, getUser }) => {
  const nav = useNavigate();
  const personData = useContext(MyContext);

  const goTohallDetails = (pack) => {
    nav(`/hallDetails/${pack.hall_id}`);
  };
  const deletePackages = (pack) => {
   
    if (pack?.package_description) {
      Swal.fire({
        title: `Are You Sure To Delete Package of ${pack.hall_name} Hall `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/destroyOffer/${pack.id}`, {
            method: "DELETE",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              alert(data.message);
              window.location.reload();
              // getUser();
            });
        }
      });
    }
  };
  function handleClick(pack) {
    nav(`/EditPackage/${pack.id}`, {
      state: { hall: pack },
    });
  }
  return (
    <>
        <div>
        <h1 className="Requests-tit">Packages</h1>
        <div className="reserv-big-cont">
          {user.map((pack) => {
            return (
              <div className="reserv-sml-cont" key={pack.id}>
                <div className="user-div">
                  <div className="user-info-div">
                    <h5>
                      {pack.hall_name}
                      
                    </h5>
                  </div>
                </div>

                <h5 className="hall-name">
                  {pack.price} $
                </h5>
                <div className="buttons">
                <button
                    className="accept-btn reserve-btn"
                    onClick={() => goTohallDetails(pack)}
                  >
                    View
                  </button>
                <button
                    className="accept-btn reserve-btn"
                    onClick={() => handleClick(pack)}
                  >
                    Edit
                  </button>
                 
                  <button
                    className="decline-btn reserve-btn"
                    onClick={() => deletePackages(pack)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardPackagesInDashboard;
