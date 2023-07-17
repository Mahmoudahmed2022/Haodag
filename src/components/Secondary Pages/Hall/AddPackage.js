import { useEffect, useState } from "react";
import "../../../Css/HallForm.css";
import "../../../Css/AddPackage.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
const AddPackage = () => {
  const personData= useContext(MyContext);
  const navigate = useNavigate();
  // console.log(personData);
  const [formData, setFormData] = useState({
    hall_name: "",
    hallid: "",
    package_description: "",
    start_date: "",
    end_date: "",
    price: "",
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

  // console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("hall_id", formData.hallid);
    formDataObj.append("hall_name", formData.hall_name);
    formDataObj.append("package_description", formData.package_description);
    formDataObj.append("start_date", formData.start_date);
    formDataObj.append("end_date", formData.end_date);
    formDataObj.append("price", formData.price);
    // console.log(formDataObj);
    if (formDataObj) {
      fetch("http://127.0.0.1:8000/admin/auth/createOffer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${personData.token}`,
          "auth-token": `${personData.token}`,
        },
        body: formDataObj,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          alert(data.message);
          navigate(`/adminDashboard`)
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
      <form className="signup-form1" >
        <h2>Add Package</h2>
        <div className="form-group1">
          <label htmlFor="hallName" className="labelDAtaForAddHall">
            Hall Name- Id:
          </label>

          <select
            className="inputDAtaForAddHall select-package"
            type="text"
            name="hall_name"
            onChange={getRegisterData}
            required
            value={formData.hall_name}
          >
            <option checked value="">
              -- Please Choose Hall --
            </option>
            {hallsName.map((hall) => (
              <option value={hall.name}>
                {hall.name} - {hall.id}
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
            name="hallid"
            onChange={getRegisterData}
            required
            value={formData.hallid}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallDescription" className="labelDAtaForAddHall">
            Package Description:
          </label>

          <textarea
            className="textAreaDAtaForAddHall"
            name="package_description"
            onChange={getRegisterData}
            required
            value={formData.package_description}
          />
        </div>
        <div className="form-group1 ">
          <div className="form-group1">
            <label htmlFor="startDate" className="labelDAtaForAddHall">
              Start Date:
            </label>

            <input
              className="textAreaDAtaForAddHall"
              name="start_date"
              type="date"
              onChange={getRegisterData}
              required
              value={formData.start_date}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="endDate" className="labelDAtaForAddHall">
              End Date:
            </label>

            <input
              className="textAreaDAtaForAddHall"
              name="end_date"
              type="date"
              onChange={getRegisterData}
              required
              value={formData.end_date}
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
            name="price"
            onChange={getRegisterData}
            required
            value={formData.price}
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
