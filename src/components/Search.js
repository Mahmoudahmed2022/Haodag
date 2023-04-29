import React from "react";
// import landing from "./images/download (1).jfif";
import "../Css/Search.css";
import "../Css/App.css";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import user from "./images/user.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Search() {
  const [halls, setHalls] = useState([]);
  const [visible, setVisible] = useState(5);
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [capacity, setCapacity] = useState("");
  const [amenities, setAmenities] = useState([]);

  const searchHalls = async (e) => {
    e.preventDefault();

    // Construct the search query
    let searchQuery = "https://fakestoreapi.com/products?";

    if (city) {
      searchQuery += `city=${city}&`;
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

    // Send the search request
    const response = await axios.post(searchQuery);
    setHalls(response.data);
  };
  
  
  
  const allHalls = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setHalls(data.data);
    });
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

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
              src={hall.image}
              alt={hall.title}
            ></img>
            {hall.title}
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
