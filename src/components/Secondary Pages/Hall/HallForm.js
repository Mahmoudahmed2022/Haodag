import { useEffect, useState } from "react";
import "../../../Css/HallForm.css";
<<<<<<< Updated upstream
import { useLocation } from "react-router-dom";
import axios from "axios";
const HallForm = (props) => {
  const location = useLocation();
  const token = location?.state?.data;
=======
import { t } from "i18next";
import { useLocation } from "react-router-dom";

const HallForm = (props) => {
  const [responseObj, setResponseObj] = useState({});
  const location = useLocation();
  const userToken=location?.state?.data;
>>>>>>> Stashed changes
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    country: "",
    city: "",
    street: "",
    rooms: 0,
    chairs: 0,
    tables: 0,
    price: 0,
    capacity: "",
    hours: 0,
    type: "",
    photos: [],
    videos: [],
    shows: [],
    services: [],
  });
  // const [formData1, setFormData1] = useState({
  //   password: "kariem51652",
  //   email:"kariem@gmail.com"
    
  // });


  function getRegisterData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
<<<<<<< Updated upstream

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/owner/auth/addHall", formData, {
        headers: {
          Authorization: `Bearer${token}`,
          "auth-token": `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // if (formData) {
    //   fetch("http://127.0.0.1:8000/owner/auth/addHall", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": token,
    //       Authorization: `Bearer${token}`,
    //     },

    //     body: JSON.stringify(formData),
    //   })
    //     .then((response) => {
    //       response.json();
    //       console.log(response);
    //     })
    //     .then((data) => {
    //       setResponseObj(data);
    //       console.log(responseObj);
    //     });
    //   // console.log("Posted");
    // }
  }
=======
  const token =
  ""; // Replace with your actual token
  formData.owner_id = userToken.id;
  const [data, setData] = useState(null);
  // console.log(userToken);
  // console.log(userToken.id)

    function handleSubmit(e) {
      e.preventDefault();
      if (formData) {
        // http://127.0.0.1:8000/api/auth/switchLogin
        // http://127.0.0.1:8000/owner/auth/addHall
        fetch("http://127.0.0.1:8000/owner/auth/addHall", {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer${userToken.token}`,
            // "auth-token":`${userToken.token}`
          },

          
  
          body:formData,
        })
          .then((response) => {
            
            console.log(response)
          })
          .then((data) => {
            setResponseObj(data);
            console.log(responseObj);
          });
        // console.log("Posted");
      }
    }
>>>>>>> Stashed changes
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImagesArray.push(e.target.result);
        setFormData({ ...formData, photos: newImagesArray });
      };

      reader.readAsDataURL(file);
    }
  };
  const handleMediaChange = (event) => {
    const files = event.target.files;
    const newVideosArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newVideosArray.push(e.target.result);
        setFormData({ ...formData, videos: newVideosArray });
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
          shows: [...prevFormData.shows, value],
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Remove selected checkbox from array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          shows: prevFormData.shows.filter((checkbox) => checkbox !== value),
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
          services: [...prevFormData.services, value],
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Remove selected checkbox from array in state
        setFormData((prevFormData) => ({
          ...prevFormData,
          services: prevFormData.services.filter(
            (checkbox) => checkbox !== value
          ),
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);

  return (
    <div className="hall-signup-page1">
      <form className="signup-form1" onSubmit={handleSubmit}>
        <h2>Add Hall</h2>
        <div className="form-group1">
          <label htmlFor="name" className="labelDAtaForAddHall">
            Hall Name:
          </label>

          <input
            className="inputDAtaForAddHall"
            type="text"
            name="name"
            onChange={getRegisterData}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="address" className="labelDAtaForAddHall">
            Hall Address:
          </label>

          <input
            className="inputDAtaForAddHall"
            type="text"
            name="address"
            onChange={getRegisterData}
            required
          />
        </div>
        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label htmlFor="country" className="labelDAtaForAddHall">
              Hall Country:
            </label>

            <input
              className="inputDAtaForAddHall"
              type="text"
              name="country"
              onChange={getRegisterData}
              required
            />
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="city" className="labelDAtaForAddHall">
              Hall City:
            </label>

            <input
              className="inputDAtaForAddHall"
              type="text"
              name="city"
              onChange={getRegisterData}
              required
            />
          </div>
        </div>
        <div className="form-group1">
          <label htmlFor="street" className="labelDAtaForAddHall">
            Hall Street:
          </label>

          <input
            className="inputDAtaForAddHall"
            type="text"
            name="street"
            onChange={getRegisterData}
            required
          />
        </div>
        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label htmlFor="rooms" className="labelDAtaForAddHall">
              Hall Rooms:
            </label>

            <input
              className="inputDAtaForAddHall"
              type="number"
              name="rooms"
              onChange={getRegisterData}
              required
            />
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="chairs" className="labelDAtaForAddHall">
              Hall Chairs:
            </label>

            <input
              className="inputDAtaForAddHall"
              type="number"
              name="chairs"
              onChange={getRegisterData}
              required
            />
          </div>
        </div>
        <div className="form-group1">
          <label htmlFor="tables" className="labelDAtaForAddHall">
            Hall Tabes:
          </label>

          <input
            className="inputDAtaForAddHall"
            type="number"
            name="tables"
            onChange={getRegisterData}
            required
          />
        </div>
        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label htmlFor="hours" className="labelDAtaForAddHall">
              Hours of reservtions :
            </label>
            <input
              className="inputDAtaForAddHall"
              type="number"
              name="hours"
              onChange={getRegisterData}
            />
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="price" className="labelDAtaForAddHall">
              Price :
            </label>
            <input
              className="inputDAtaForAddHall"
              type="number"
              name="price"
              onChange={getRegisterData}
            />
          </div>
        </div>

        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label>Hall Type</label>
            <select name="type" onChange={getRegisterData}>
              <option checked value="">
                -- Please Choose HallType --
              </option>
              <option value="Open Air">Open Air</option>
              <option value="Closed">Closed </option>
            </select>
          </div>
          <div className="form-group1 Width47">
            <label htmlFor="capacity" className="labelDAtaForAddHall">
              Hall Capacity:
            </label>

            <input
              className="inputDAtaForAddHall "
              type="number"
              min="0"
              name="capacity"
              onChange={getRegisterData}
              required
            />
          </div>
        </div>
        <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Images</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Videos</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            accept="video/*"
            multiple
            onChange={handleMediaChange}
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
                  checked={formData.shows.includes("Magic shows")}
                  onChange={ShowshandleCheckboxChange}
                />
                Magic shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="musician Dance performances"
                  checked={formData.shows.includes(
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
                  checked={formData.shows.includes(
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
                  checked={formData.shows.includes("Fashion shows ")}
                  onChange={ShowshandleCheckboxChange}
                />
                Fashion shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Live music performances"
                  checked={formData.shows.includes("Live music performances")}
                  onChange={ShowshandleCheckboxChange}
                />
                Live music performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Stand-up comedy"
                  checked={formData.shows.includes("Stand-up comedy")}
                  onChange={ShowshandleCheckboxChange}
                />
                Stand-up comedy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Traditional cultural performances"
                  checked={formData.shows.includes(
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
                  checked={formData.shows.includes(
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
                  checked={formData.shows.includes(
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
                  checked={formData.shows.includes("Fireworks")}
                  onChange={ShowshandleCheckboxChange}
                />
                Fireworks
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Dancing"
                  checked={formData.shows.includes("Dancing")}
                  onChange={ShowshandleCheckboxChange}
                />
                Dancing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="DJ"
                  checked={formData.shows.includes("DJ")}
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
                  checked={formData.services.includes("Venue rental")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Venue rental
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Catering "
                  checked={formData.services.includes("Catering ")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Catering
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Open Buffet"
                  checked={formData.services.includes("Open Buffet")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Open Buffet
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Drinks Section"
                  checked={formData.services.includes("Drinks Section")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Drinks Section
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Parking"
                  checked={formData.services.includes("Parking")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Parking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Accommodations"
                  checked={formData.services.includes("Accommodations")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Accommodations (Bridal suite and groom's room)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Audio and visual equipment"
                  checked={formData.services.includes(
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
                  checked={formData.services.includes("Event coordination")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Event Planning coordination
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Decorations"
                  checked={formData.services.includes("Decorations")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Decorations
              </label>
              <label>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  value="Photography and videograph"
                  checked={formData.services.includes(
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
          <button className="addHallbtn" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default HallForm;
