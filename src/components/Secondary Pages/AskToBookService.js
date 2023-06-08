import React, { useState } from "react";
import "../../Css/Modal.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import Swal from "sweetalert2";
const AskToBookService = (props) => {
  const nav = useNavigate();
  const prop = useParams();
  const serviceId = prop.id;
  const personData = useContext(MyContext);
  const [formData, setFormData] = useState({
    sub_id: serviceId,
    check_in_date: "",
    check_out_date: "",
  });

  function getRegisterData(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("sub_id", formData.sub_id);
    formDataObj.append("check_in_date", formData.check_in_date);
    formDataObj.append("check_out_date", formData.check_out_date);

    fetch("http://127.0.0.1:8000/user/auth/bookSubService", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
      body: formDataObj,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: "Service Booked Successfully",
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform navigation here
            window.history.back(); // This will navigate back one step in the browser history
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(formData, personData.token);
  return (
    <>
      <div className="modal2">
        <h2 className="headContact">Ask To Book</h2>

        <form className="formAddPlan" onSubmit={handleSubmit}>
          <label htmlFor="datetime">Select check in date:</label>
          <input
            className="InputModalHallDetails"
            type="date"
            id="date"
            name="check_in_date"
            value={formData.check_in_date}
            onChange={getRegisterData}
            required
          />
          <label htmlFor="datetime">Select check out date:</label>
          <input
            className="InputModalHallDetails"
            type="date"
            id="date"
            name="check_out_date"
            value={formData.check_out_date}
            onChange={getRegisterData}
            required
          />

          <div>
            <div className="resetAndCancel2">
              <button className="cancel" onClick={() => nav(-1)}>
                Cancel
              </button>
              <button className="submitForm2" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AskToBookService;
