import { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../../Main Pages/Redux";

function EditPackage() {
  const personData = useContext(MyContext);
  let { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const hall = location.state.hall;
  console.log(hall);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    price: "",
  });
  console.log("ID", id);
  console.log(personData);
  function handleSubmit(e) {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("start_date", formData.start_date);
    formDataObj.append("end_date", formData.end_date);
    formDataObj.append("price", formData.price);
    console.log(formDataObj);
    if (formDataObj) {
      fetch(`http://127.0.0.1:8000/admin/auth/updateOffer/${id}`, {
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
          Swal.fire({
            title: data.message,
            showCancelButton: false,
          });
          navigate(`/adminDashboard`, );
        });
    }
  }
  function getRegisterData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);
  return (
    <>
      <div className="hall-signup-page1">
        <form className="signup-form1">
          <h2>Edit Package</h2>
          <div className="form-group1">
            <label htmlFor="hallName" className="labelDAtaForAddHall">
              Hall Name:
            </label>

            <input
              className="inputDAtaForAddHall"
              type="text"
              name="hall_name"
              onChange={getRegisterData}
              required
              defaultValue={hall.hall_name}
              readOnly
            />
          </div>

          <div className="form-group1">
            <label htmlFor="hallDescription" className="labelDAtaForAddHall">
              Package Description:
            </label>

            <input
              className="textAreaDAtaForAddHall"
              name="package_description"
              onChange={getRegisterData}
              required
              defaultValue={hall.package_description}
              
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
                defaultValue={hall.start_date}
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
                defaultValue={hall.end_date}
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
              defaultValue={hall.price}
            />
          </div>

          <div className="DivBtnAddHall">
            <button className="addHallbtn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditPackage;
