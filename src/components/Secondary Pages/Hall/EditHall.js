import { useContext } from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../Main Pages/Redux";

function EditHall() {
  const personData = useContext(MyContext);
  let {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
const hall = location.state.hall;
console.log(hall)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rooms: 0,
    chairs: 0,
    price: 0,
    hours: 0,
    tables: 0,
    type: "",
    capacity: 0,
    available: 0,
    country: "",
    city: "",
    street: "",
    photos: [],
    videos: [],
    shows: [],
    services: [],
  });
  console.log("ID",id);
console.log(personData)

  // Fetch hall data if in edit mode

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch(`http://127.0.0.1:8000/owner/auth/updateHall/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        hall.name=data.name
        hall.phone=data.phone
        hall.password=data.password 
        hall.address=data.address
        hall.rooms=data.rooms
        hall.chairs=data.chairs
        hall.price=data.price
        hall.hours=data.hours
        hall.tables=data.tables
        hall.type=data.type
        hall.capacity=data.capacity
        hall.available=data.available
        hall.country=data.country
        hall.city=data.city
        hall.street=data.street
        hall.shows=data.shows
        hall.services=data.services
        console.log(data);
        navigate(`/user/:${personData.role}/:${personData.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  // Render form for adding or editing a hall
  return (
    <div className="hall-signup-page1">
      <form className="signup-form1" onSubmit={handleSubmit}>
        <h2>Edit Hall</h2>
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
            defaultValue={hall.name}
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
            defaultValue={hall.address}

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
              defaultValue={hall.country}

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
              defaultValue={hall.city}

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
            defaultValue={hall.street}

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
              defaultValue={hall.rooms}

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
              defaultValue={hall.chairs}

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
            defaultValue={hall.tables}

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
            defaultValue={hall.available}

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
              defaultValue={hall.hours}

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
              defaultValue={hall.price}

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
              defaultValue={hall.type}

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
              defaultValue={hall.capacity}

            />
          </div>
        </div>
        <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Images</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            accept="image/*"
            name="photos"
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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

                />
                musician Dance performances
              </label>
              <label>
                <input
                  type="checkbox"
                  name="shows"
                  value="Dance performances"
                  checked={formData.shows.includes(
                    "FirDance performanceseworks"
                  )}
                  onChange={ShowshandleCheckboxChange}
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.shows}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
                  defaultValue={hall.services}

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
}

export default EditHall;
