import { useContext, useEffect, useState } from "react";
import "../../Css/AddService.css";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../Main Pages/Redux";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
import Swal from "sweetalert2";
function AddService() {
  const personData = useContext(MyContext);
  const [responseObj, setResponseObj] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    photos: [],
    country: "",
    city: "",
    address: "",
    type: "",
  });
  function getRegisterData(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  console.log(formData);
  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setFormData({
      ...formData,
      photos: selectedImages,
    });
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("description", formData.description);
    formDataObj.append("price", formData.price);
    for (let i = 0; i < formData.photos.length; i++) {
      formDataObj.append(`photos[${i}]`, formData.photos[i]);
    }
    formDataObj.append("country", formData.country);
    formDataObj.append("city", formData.city);
    formDataObj.append("address", formData.address);
    formDataObj.append("type", formData.type);

    console.log(formDataObj);
    if (formDataObj) {
      fetch("http://127.0.0.1:8000/supplier/auth/addService", {
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
          console.log(data);
          Swal.fire({
            title: "Service Added Succuessfully",
            showCancelButton: false,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/${personData.role}/${personData.id}`);
            }
          });
        });
      // window.location.reload();
    }
  };

  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);

  return (
    <>
      <NavbarWithSideBar />
      <div className="hall-signup-page1">
        <div className="servcice-form">
          <form className="signup-form1-servcice" onSubmit={handleSubmit1}>
            <h2>Add Service</h2>
            <div className="form-group1">
              <label htmlFor="name" className="labelDAtaForService">
                Service Name:
              </label>

              <input
                className="inputDAtaForAddHall"
                type="text"
                name="name"
                onChange={getRegisterData}
                required
                value={formData.name}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="description" className="labelDAtaForService">
                Service Description:
              </label>

              <input
                className="inputDAtaForAddHall"
                type="text"
                name="description"
                onChange={getRegisterData}
                required
                value={formData.description}
              />
            </div>
            <div className="ContTwoDivInOneRow">
              <div className="form-group1 Width47">
                <label htmlFor="country" className="labelDAtaForService">
                  Service Country:
                </label>

                <input
                  className="inputDAtaForAddHall"
                  type="text"
                  name="country"
                  onChange={getRegisterData}
                  required
                  value={formData.country}
                />
              </div>
              <div className="form-group1 Width47">
                <label htmlFor="city" className="labelDAtaForService">
                  Service City:
                </label>

                <input
                  className="inputDAtaForAddHall"
                  type="text"
                  name="city"
                  onChange={getRegisterData}
                  required
                  value={formData.city}
                />
              </div>
            </div>
            <div className="form-group1">
              <label htmlFor="address" className="labelDAtaForService">
                Service Address:
              </label>

              <input
                className="inputDAtaForAddHall"
                type="text"
                name="address"
                onChange={getRegisterData}
                required
                value={formData.address}
              />
            </div>
            <div className="form-group1 ">
              <label htmlFor="price" className="labelDAtaForService">
                Service Price:
              </label>

              <input
                className="inputDAtaForAddHall"
                type="number"
                name="price"
                onChange={getRegisterData}
                required
                value={formData.price}
              />
            </div>
            <div className="form-group1">
              <label className="labelDAtaForService" htmlFor="type">
                Service Type:
              </label>
              <select
                name="type"
                id="type"
                value={formData.type}
                className="select-field-AddHall"
                onChange={getRegisterData}
              >
                <option checked value="">
                  Choose a Type
                </option>
                <option value="cake">Cake</option>
                <option value="zaffatAndDj">Zaffat And Dj</option>
                <option value="catering">Catering</option>
                <option value="bodyCare">Body Care</option>{" "}
                <option value="flowers">Flowers</option>
                <option value="car">Cars</option>
              </select>
            </div>

            <div className="form-group1">
              <label className="labelDAtaForService">Choose Images</label>

              <input
                className="inputDAtaForAddHall"
                type="file"
                name="photos"
                id="photos"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div className="DivBtnAddHall">
              <button className="addHallbtn" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddService;
