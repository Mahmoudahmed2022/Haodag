import React from "react";
import "../../Css//Search.css";
import "../../Css//App.css";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarWithSideBar from "./NavbarWithSideBar";
function Search() {
  const [halls, setAllHalls] = useState([]);
  const [visible, setVisible] = useState(5);
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [capacity, setCapacity] = useState("");
  const [name, setName] = useState("");
  const [amenities, setAmenities] = useState([]);
  const location = useLocation();
  const userToken =location?.state?.userToken;
  const userData =location?.state?.userData;
  const isLogin =location?.state?.isLogin;

  const searchHalls = async (e) => {
    e.preventDefault();

    let searchQuery = "https://fakestoreapi.com/products?";

    if (city) {
      searchQuery += `city=${city}&`;
    }
    if (name) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByName", {
        method: "POST",
        body: JSON.stringify(name),
      })
        .then((response) => response.json())
        .then((data) => {
          setAllHalls(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (priceRange) {
      searchQuery += `price_range=${priceRange}&`;
    }
    if (capacity) {
      searchQuery += `capacity=${capacity}&`;
    }
    if (amenities.length > 0) {
      searchQuery += `amenities=${amenities.join(",")}&`;
    }
  };

  const allHalls = () => {
    fetch("http://127.0.0.1:8000/api/auth/getAllHalls")
      .then((response) => response.json())
      .then((data) => {
        setAllHalls(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };
  console.log(city, priceRange, capacity, amenities, name, halls);
  useEffect(() => {
    allHalls();
  }, []);
  const renderCard = (hall) => {
    return (
      <>

        <div className="search-hall-container" key={hall.id}>
          <div className="search-img-div">
            <img
              className="search-hall-img"
              src={hall.photos[0]}
              alt={hall.name}
            ></img>
            {hall.name}
          </div>
          <div className="search-hall-body">
            <Link
              to={`/hallDetails/${hall.id}`}
              className="search-details-btn s-d-hover"
              href="#"
            >
              Details
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
              <NavbarWithSideBar userData={userData} userToken={userToken} isLogin={isLogin}/>

      <div className="search-page-container">
        <div className="landing-container">
          {/* <div className="user-pic">
            <img src={user} alt="user pic" />
          </div> */}
          <div className="search-box">
            <div className="landing-text">
              <div className="sml-landing-text-container">
                <p className="sml-landing-text">It's simple and smart</p>
              </div>
              <div className="big-landing-text-container">
                <p className="big-landing-text">Search , Find & Book</p>
              </div>
            </div>
            <div className="search-form-container">
              <form onSubmit={searchHalls} className="advanced-search-form">
                <div className="search-inputs-container">
                  <div className="search-input-container">
                    <label htmlFor="name">Name:</label>
                    <input
                      className="name-input"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="search-input-container">
                    <label htmlFor="city">City:</label>
                    <select
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">--Select a city--</option>
                      <option value="Cairo">Cairo</option>
                      <option value="Giza">Giza</option>
                      <option value="Alexandria">Alexandria</option>
                    </select>
                  </div>

                  <div className="search-input-container">
                    <label htmlFor="price-range">Price Range:</label>
                    <select
                      id="price-range"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">--Select a price range--</option>
                      <option value="0-500">0-500 EGP</option>
                      <option value="500-1000">500-1000 EGP</option>
                      <option value="1000-2000">1000-2000 EGP</option>
                      <option value="2000+">2000+ EGP</option>
                    </select>
                  </div>

                  <div className="search-input-container">
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                      type="number"
                      id="capacity"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                    />
                  </div>

                  <div className="search-input-container">
                    <label htmlFor="amenities">Amenities:</label>
                    <div className="amenity-checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          value="catering"
                          checked={amenities.includes("catering")}
                          onChange={(e) =>
                            setAmenities((prev) =>
                              e.target.checked
                                ? [...prev, e.target.value]
                                : prev.filter((a) => a !== e.target.value)
                            )
                          }
                        />
                        Catering
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          value="music"
                          checked={amenities.includes("music")}
                          onChange={(e) =>
                            setAmenities((prev) =>
                              e.target.checked
                                ? [...prev, e.target.value]
                                : prev.filter((a) => a !== e.target.value)
                            )
                          }
                        />
                        Live Music
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          value="photography"
                          checked={amenities.includes("photography")}
                          onChange={(e) =>
                            setAmenities((prev) =>
                              e.target.checked
                                ? [...prev, e.target.value]
                                : prev.filter((a) => a !== e.target.value)
                            )
                          }
                        />
                        Photography
                      </label>
                    </div>
                  </div>
                </div>

                <div className="search-btn-div">
                  <button type="submit" className="search-btn s-d-hover">
                    <IoMdSearch className="search-icon" />
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="allhalls-container">
          {halls.slice(0, visible).map(renderCard)}
        </div>
        <div className="for-button">
          {visible < halls.length && (
            <button className="more" onClick={loadMore}>
              Load 5 More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Search;
