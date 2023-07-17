import React, { useContext, useState } from "react";
import "../../../Css/Modal.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../Main Pages/Redux";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";

const ModalForAskToBook = (props) => {
  const personData=useContext(MyContext);
  const nav = useNavigate();
  const prop = useParams();
  const hallId = prop.id;
  const [formData, setFormData] = useState({
    hall_id: hallId,
    check_in_date: "",
    check_out_date: "",
  });

  // console.log(hallId, "ask to book", personData);
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
    formDataObj.append("hall_id", formData.hall_id);
    formDataObj.append("check_in_date", formData.check_in_date);
    formDataObj.append("check_out_date", formData.check_out_date);

    fetch("http://127.0.0.1:8000/user/auth/bookRoom", {
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
        alert(data.message);
        nav(`/HallsBookings`);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // console.log(formData, personData.token);
  return (
    <>
    <NavbarWithSideBar/>
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
              <button className="delete buttonMain" onClick={() => nav(-1)}>
                Cancel
              </button>
              <button className="details buttonMain" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalForAskToBook;
