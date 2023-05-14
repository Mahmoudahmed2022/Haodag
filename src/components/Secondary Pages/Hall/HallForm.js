import { useEffect, useState } from "react";
import "../../../Css/HallForm.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const HallForm = (props) => {
  const [responseObj, setResponseObj] = useState({});
  const location = useLocation();
  const userToken = location?.state?.data;
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
  function getRegisterData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // function createFormData(formData) {
  //   const data = new FormData();
  //   data.append("name", formData.name);
  //   data.append("address", formData.address);
  //   data.append("rooms", formData.rooms);
  //   data.append("chairs", formData.chairs);
  //   data.append("price", formData.price);
  //   data.append("hours", formData.hours);
  //   data.append("tables", formData.tables);
  //   data.append("type", formData.type);
  //   data.append("capacity", formData.capacity);
  //   data.append("available", formData.available);
  //   data.append("country", formData.country);
  //   data.append("city", formData.city);
  //   data.append("street", formData.street);
  //   data.append("photos", formData.photos);
  //   data.append("videos", formData.videos);
  //   data.append("shows", formData.shows);
  //   data.append("services", formData.services);

  //   return data;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (formData) {
  //     fetch("http://127.0.0.1:8000/owner/auth/addHall", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userToken.token}`,
  //         "auth-token": `${userToken.token}`,
  //       },
  //       // body: createFormData(formData),
  //       body: JSON.stringify(formData),
  //       // body: formDataObj,
  //     })
  //       .then((response) => {
  //         return response.json();
  //         // console.log(response)
  //       })
  //       .then((data) => {
  //         setResponseObj(data);
  //         console.log(responseObj)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (formData) {
  //     fetch("http://127.0.0.1:8000/owner/auth/addHall", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userToken.token}`,
  //         "auth-token": `${userToken.token}`,
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => {return response.json();})
  //       .then((data) => {
  //         console.log(data)
  //         const hallId = data.data.id;
  //         const photoPromises = formData.photoname.map((photo) =>
  //           fetch(`http://127.0.0.1:8000/owner/auth/addPhotoToMyhall/${hallId}`, {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${userToken.token}`,
  //               "auth-token": `${userToken.token}`,
  //             },
  //             body: JSON.stringify({ photoname: photo }),
  //           }).then((response) =>  {return response.json();})
  //         );
  //         Promise.all(photoPromises).then((responses) => {
  //           const photoNames = responses.map((response) => response.data.photos);
  //           setFormData({ ...formData, photos: photoNames });
  //           setResponseObj(data);
  //           console.log(data)
  //           const updatedResponseObj = { ...responseObj, photoname: data.photos };
  //           setResponseObj(updatedResponseObj);
  //           console.log(updatedResponseObj)

  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  console.log(userToken);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData) {
      fetch("http://127.0.0.1:8000/owner/auth/addHall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.token}`,
          "auth-token": `${userToken.token}`,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const hallId = data.data.id; // extract the hall id from the response
          setResponseObj(data);
          console.log(responseObj);
          // construct the URL for the second API call using the hall id

          // create a new FormData object and append the photos to it
          const photoData = new FormData();
          formData.photos.forEach((photo) => {
            photoData.append("photo", photo);
            console.log(photoData)
          });

          // make the second API call to upload the photos
          fetch(`http://127.0.0.1:8000/owner/auth/addPhotoToMyhall/${hallId}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${userToken.token}`,
              "auth-token": `${userToken.token}`,
            },
            body: photoData,
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });

          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  // async function addHallWithPhotos(formData, photos) {
  //   const response = await fetch("http://127.0.0.1:8000/owner/auth/addHall", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${userToken.token}`,
  //       "auth-token": `${userToken.token}`,
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   const result = await response.json();

  //   if (response.ok) {
  //     const hallId = result.hallId;

  //     // Add photos to the hall
  //     for (const photo of photos) {
  //       await addPhotoToHall(hallId, photo);
  //     }
  //   } else {
  //     throw new Error(result.message);
  //   }
  // }

  // async function addPhotoToHall(hallId, photo) {
  //   const response = await fetch(`http://127.0.0.1:8000/owner/auth/addPhotoToMyhall/${hallId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userToken.token}`,
  //       "auth-token": `${userToken.token}`,
  //     },
  //     body: JSON.stringify({ photo }),
  //   });

  //   const result = await response.json();

  //   if (!response.ok) {
  //     throw new Error(result.message);
  //   }
  // }

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
        <div className="form-group1">
          <label htmlFor="available" className="labelDAtaForAddHall">
            Available:
          </label>

          <select
            className="inputDAtaForAddHall select-available-type"
            name="available"
            onChange={getRegisterData}
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
            <select
              className="select-available-type"
              name="type"
              onChange={getRegisterData}
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
        <div className="form-group1">
          <label className="labelDAtaForAddHall">Choose Videos</label>

          <input
            className="inputDAtaForAddHall"
            type="file"
            accept="video/*"
            name="videos"
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
  );
};
export default HallForm;
