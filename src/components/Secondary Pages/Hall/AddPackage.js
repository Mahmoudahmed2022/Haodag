import { useEffect, useState } from "react";
import "../../../Css/HallForm.css";
import "../../../Css/AddPackage.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const AddPackage = (props) => {
  const location = useLocation();
  const userToken = location?.state?.data;
  console.log(userToken);
  const [formData, setFormData] = useState({
    hallName: "",
    hallId: "",
    packageDescription: "",
    startDate: "",
    endDate: "",
    packagePrice: "",
  });
  const [hallsName, sethallsName] = useState([]);
  const allHalls = () => {
    axios.get("http://127.0.0.1:8000/api/auth/getAllHalls").then((data) => {
      sethallsName(data.data.data);
    });
  };
  function getRegisterData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("hallName", formData.hallName);
    formDataObj.append("hallId", formData.hallId);
    formDataObj.append("packageDescription", formData.packageDescription);
    formDataObj.append("startDate", formData.startDate);
    formDataObj.append("endDate", formData.endDate);
    formDataObj.append("packagePrice", formData.packagePrice);
    console.log(formDataObj);
    if (formDataObj) {
      fetch("http://127.0.0.1:8000/admin/auth/createOffer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          "auth-token": `${userToken.token}`,
        },
        body: formDataObj,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  }

  useEffect(() => {
    allHalls();
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);

  return (
    <div className="hall-signup-page1">
      <form className="signup-form1" onSubmit={handleSubmit}>
        <h2>Add Package</h2>
        <div className="form-group1">
          <label htmlFor="hallName" className="labelDAtaForAddHall">
            Hall Name:
          </label>

          <select
            className="inputDAtaForAddHall select-package"
            type="text"
            name="hallName"
            onChange={getRegisterData}
            required
            value={formData.hallName}
          >
            <option checked value="">
              -- Please Choose Hall --
            </option>
            {hallsName.map((hall) => (
              <option checked value={hall.name}>
                {hall.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group1">
          <label htmlFor="hallId" className="labelDAtaForAddHall">
            Hall Id:
          </label>

          <input
            className="textAreaDAtaForAddHall"
            name="hallId"
            onChange={getRegisterData}
            required
            value={formData.hallId}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallDescription" className="labelDAtaForAddHall">
            Package Description:
          </label>

          <textarea
            className="textAreaDAtaForAddHall"
            name="packageDescription"
            onChange={getRegisterData}
            required
            value={formData.packageDescription}
          />
        </div>
        <div className="form-group1 ">
          <div className="form-group1">
            <label htmlFor="startDate" className="labelDAtaForAddHall">
              Start Date:
            </label>

            <input
              className="textAreaDAtaForAddHall"
              name="startDate"
              type="date"
              onChange={getRegisterData}
              required
              value={formData.startDate}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="endDate" className="labelDAtaForAddHall">
              End Date:
            </label>

            <input
              className="textAreaDAtaForAddHall"
              name="endDate"
              type="date"
              onChange={getRegisterData}
              required
              value={formData.endDate}
            />
          </div>
        </div>
        <div className="form-group1">
          <label htmlFor="hallCapacity" className="labelDAtaForAddHall">
            Package price:
          </label>

          <input
            className="inputDAtaForAddHall price-package "
            type="number"
            name="packagePrice"
            onChange={getRegisterData}
            required
            value={formData.packagePrice}
          />
        </div>

        <div className="DivBtnAddHall">
          <button className="addHallbtn" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPackage;
