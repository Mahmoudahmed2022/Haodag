import { useContext, useEffect, useState } from "react";
import "../../../Css/HallForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../../Main Pages/Redux";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";

const HallForm = () => {
  const personData = useContext(MyContext);
  const [responseObj, setResponseObj] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rooms: "",
    chairs: "",
    price: "",
    hours: "",
    tables: "",
    type: "",
    capacity: "",
    available: "",
    country: "",
    city: "",
    street: "",
    description:"",
    link:"",
    photos: [],
    videos: [],
    shows: [],
    services: [],
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

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("address", formData.address);
    formDataObj.append("chairs", formData.chairs);
    formDataObj.append("price", formData.price);
    formDataObj.append("hours", formData.hours);
    formDataObj.append("rooms", formData.rooms);
    formDataObj.append("tables", formData.tables);
    formDataObj.append("type", formData.type);
    formDataObj.append("capacity", formData.capacity);
    formDataObj.append("available", formData.available);
    formDataObj.append("country", formData.country);
    formDataObj.append("street", formData.street);
    formDataObj.append("city", formData.city);
    formDataObj.append("description", formData.description);
    formDataObj.append("link", formData.link);


    for (let i = 0; i < formData.shows.length; i++) {
      formDataObj.append(`shows[${i}]`, formData.shows[i]);
    }
    for (let i = 0; i < formData.services.length; i++) {
      formDataObj.append(`services[${i}]`, formData.services[i]);
    }
    for (let i = 0; i < formData.photos.length; i++) {
      formDataObj.append(`photos[${i}]`, formData.photos[i]);
    }
    console.log(formDataObj);
    if (formDataObj) {
      fetch("http://127.0.0.1:8000/owner/auth/addHall", {
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

        });
      // navigate(`/user/${personData.role}/${personData.id}`);
      // window.location.reload();
    }
  };

  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);

  return (
    <>
    <NavbarWithSideBar/>
    <div className="hall-signup-page1">
      <form className="signup-form1" onSubmit={handleSubmit1}>
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
            value={formData.name}
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
            value={formData.address}
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
              value={formData.country}
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
              value={formData.city}
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
            value={formData.street}
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
              value={formData.rooms}
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
              value={formData.chairs}
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
            value={formData.tables}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="available" className="labelDAtaForAddHall">
            Available:
          </label>

          <select
            className="inputDAtaForAddHall select-available-type"
            name="available"
            onChange={getRegisterData}
            value={formData.available}
          >
            <option checked value="">
              -- Please Choose HallType --
            </option>
            <option value="1">Available</option>
            <option value="0">Not Available</option>
          </select>
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
              value={formData.hours}
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
              value={formData.price}
            />
          </div>
        </div>

        <div className="ContTwoDivInOneRow">
          <div className="form-group1 Width47">
            <label>Hall Type</label>
            <select
              className="select-available-type"
              name="type"
              onChange={getRegisterData}
              value={formData.type}
            >
              <option checked value="">
                -- Please Choose HallType --
              </option>
              <option value="Open Air">Open Air</option>
              <option value="Closed">Closed</option>
              <option value="vialls">vialls</option>
              <option value="Hotels">Hotels</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Clubs">Clubs</option>
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
              value={formData.capacity}
            />
          </div>
        </div>
        <div className="form-group1">
          <label htmlFor="street" className="labelDAtaForAddHall">
            Hall Description:
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
        <div className="form-group1">
          <label htmlFor="link" className="labelDAtaForAddHall">
            Hall Link In Google Maps:
          </label>

          <input
            className="inputDAtaForAddHall"
            type="text"
            name="link"
            onChange={getRegisterData}
            required
            value={formData.link}
          />
        </div>
        <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Images</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            name="photos"
            id="photos"
            multiple
            onChange={handleImageChange}
          />
        </div>
        {/* <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Videos</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            accept="video/*"
            name="videos"
            multiple
            onChange={handleMediaChange}
          />
        </div> */}
        <div className="AllChecBoxes">
          <div className="ShowsHall">
            <h2>Shows</h2>
            <div className="contCheckBoxes">
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Magic shows"
                  checked={formData.shows.includes("Magic shows")}
                  onChange={ShowshandleCheckboxChange}
                />
                Magic shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
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
                  name="shows"
                  value="Dance performances"
                  checked={formData.shows.includes("Dance performances")}
                  onChange={ShowshandleCheckboxChange}
                />
                Dance performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Fashion shows "
                  checked={formData.shows.includes("Fashion shows ")}
                  onChange={ShowshandleCheckboxChange}
                />
                Fashion shows
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Live music performances"
                  checked={formData.shows.includes("Live music performances")}
                  onChange={ShowshandleCheckboxChange}
                />
                Live music performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Stand-up comedy"
                  checked={formData.shows.includes("Stand-up comedy")}
                  onChange={ShowshandleCheckboxChange}
                />
                Stand-up comedy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
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
                  name="shows"
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
                  name="shows"
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
                  name="shows"
                  value="Fireworks"
                  checked={formData.shows.includes("Fireworks")}
                  onChange={ShowshandleCheckboxChange}
                />
                Fireworks
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Dancing"
                  checked={formData.shows.includes("Dancing")}
                  onChange={ShowshandleCheckboxChange}
                />
                Dancing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
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
                  name="services"
                  value="Venue rental"
                  checked={formData.services.includes("Venue rental")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Venue rental
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Catering "
                  checked={formData.services.includes("Catering ")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Catering
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Open Buffet"
                  checked={formData.services.includes("Open Buffet")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Open Buffet
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Drinks Section"
                  checked={formData.services.includes("Drinks Section")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Drinks Section
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Parking"
                  checked={formData.services.includes("Parking")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Parking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Accommodations"
                  checked={formData.services.includes("Accommodations")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Accommodations (Bridal suite and groom's room)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
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
                  name="services"
                  value="Event coordination"
                  checked={formData.services.includes("Event coordination")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Event Planning coordination
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Decorations"
                  checked={formData.services.includes("Decorations")}
                  onChange={ServiceshandleCheckboxChange}
                />
                Decorations
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
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
    </>
  );
};
export default HallForm;
