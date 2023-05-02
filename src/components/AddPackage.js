import { useEffect, useState } from "react";
import "../Css/HallForm.css";
import "../Css/AddPackage.css";
import axios from "axios";

const AddPackage = (props) => {
  const [formData, setFormData] = useState({
    hallName: "",
    hallAddress: "",
    price: 0,
    hallDescription: "",
    hallCapacity: "",
    statTime: "",
    endTime: "",
    hallType: "",
    hallImage: [],
    ShowsSelectedCheckboxes: [],
    ServicesSelectedCheckboxes: [],
  });
  const [hallsName, sethallsName] = useState([]);
  const allHalls = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      sethallsName(data.data);
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
    if (formData) {
      fetch("http://localhost:9001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      console.log("Posted");
    }
  }
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImagesArray.push(e.target.result);
        setFormData({ ...formData, hallImage: newImagesArray });
      };

      reader.readAsDataURL(file);
    }
  };

  const ShowshandleCheckboxChange = async (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      try {
        // Add selected checkbox to array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          ShowsSelectedCheckboxes: [
            ...prevFormData.ShowsSelectedCheckboxes,
            value,
          ],
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Remove selected checkbox from array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          ShowsSelectedCheckboxes: prevFormData.ShowsSelectedCheckboxes.filter(
            (checkbox) => checkbox !== value
          ),
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const ServiceshandleCheckboxChange = async (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      try {
        // Add selected checkbox to array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          ServicesSelectedCheckboxes: [
            ...prevFormData.ServicesSelectedCheckboxes,
            value,
          ],
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Remove selected checkbox from array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          ServicesSelectedCheckboxes:
            prevFormData.ServicesSelectedCheckboxes.filter(
              (checkbox) => checkbox !== value
            ),
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          >
            <option checked value="">
              -- Please Choose HallType --
            </option>
            {hallsName.map((hall) => (
              <option checked value={hall.name}>
                {hall.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group1">
          <label htmlFor="hallDescription" className="labelDAtaForAddHall">
            Package Description:
          </label>

          <textarea
            className="textAreaDAtaForAddHall"
            name="hallDescription"
            onChange={getRegisterData}
            required
          />
        </div>

        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label htmlFor="hallStartTime" className="labelDAtaForAddHall">
              Start Time:
            </label>
            <input
              className="inputDAtaForAddHall"
              type="time"
              name="statTime"
              onChange={getRegisterData}
            />
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="hallEndTime" className="labelDAtaForAddHall">
              End Time:
            </label>
            <input
              className="inputDAtaForAddHall"
              type="time"
              name="endTime"
              onChange={getRegisterData}
            />
          </div>
        </div>

        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label>Hall Type</label>
            <select name="hallType" onChange={getRegisterData}>
              <option checked value="">
                -- Please Choose HallType --
              </option>
              <option value="Open Air">Open Air</option>
              <option value="Closed">Closed </option>
            </select>
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="hallCapacity" className="labelDAtaForAddHall">
              Hall Capacity:
            </label>

            <input
              className="inputDAtaForAddHall "
              type="number"
              min="0"
              name="hallCapacity"
              onChange={getRegisterData}
              required
            />
          </div>
        </div>
        <div className="form-group1 Width47">
          <label htmlFor="hallCapacity" className="labelDAtaForAddHall">
            Package price:
          </label>

          <input
            className="inputDAtaForAddHall price-package "
            type="number"
            name="hallPrice"
            onChange={getRegisterData}
            required
          />
        </div>
        <div className="AllChecBoxes">
          <div className="ShowsHall">
            <h2>Shows</h2>
            <div className="contCheckBoxes">
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Magic shows"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Magic shows"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Magic shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="musician Dance performances"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "musician Dance performances"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                musician Dance performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Dance performances"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "FirDance performanceseworks"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Dance performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Fashion shows "
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Fashion shows "
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Fashion shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Live music performances"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Live music performances"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Live music performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Stand-up comedy"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Stand-up comedy"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Stand-up comedy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Traditional cultural performances"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Traditional cultural performances"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Traditional cultural performances
              </label>

              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Aerialist performances by acrobats"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Aerialist performances by acrobats"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Aerialist performances by acrobats
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="games or quizzes for guests"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "games or quizzes for guests"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                games or quizzes for guests
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Fireworks"
                  checked={formData.ShowsSelectedCheckboxes.includes(
                    "Fireworks"
                  )}
                  onChange={ShowshandleCheckboxChange}
                />
                Fireworks
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Dancing"
                  checked={formData.ShowsSelectedCheckboxes.includes("Dancing")}
                  onChange={ShowshandleCheckboxChange}
                />
                Dancing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="DJ"
                  checked={formData.ShowsSelectedCheckboxes.includes("DJ")}
                  onChange={ShowshandleCheckboxChange}
                />
                DJ
              </label>
            </div>
          </div>
          <div className="ServicesHall">
            <h2>Services</h2>
            <div className="contCheckBoxes">
              <label htmlFor="myCheckbox">
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Venue rental"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Venue rental"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Venue rental
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Catering "
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Catering "
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Catering
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Open Buffet"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Open Buffet"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Open Buffet
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Drinks Section"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Drinks Section"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Drinks Section
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Parking"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Parking"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Parking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Accommodations"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Accommodations"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Accommodations (Bridal suite and groom's room)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Audio and visual equipment"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Audio and visual equipment"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Audio and visual equipment
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Event coordination"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Event coordination"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Event Planning coordination
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Decorations"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Decorations"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Decorations
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Photography and videograph"
                  checked={formData.ServicesSelectedCheckboxes.includes(
                    "Photography and videograph"
                  )}
                  onChange={ServiceshandleCheckboxChange}
                />
                Photography and videograph
              </label>
            </div>
          </div>
        </div>
        <div className="DivBtnAddHall">
          {" "}
          <button className="addHallbtn" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPackage;
