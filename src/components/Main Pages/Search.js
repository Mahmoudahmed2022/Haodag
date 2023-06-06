import React from "react";
import "../../Css//Search.css";
import "../../Css//App.css";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "./Redux";
import Swal from "sweetalert2";
function Search() {
  const personData = useContext(MyContext);

  const [halls, setAllHalls] = useState([]);
  const [visible, setVisible] = useState(5);
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const searchHalls = (e) => {
    e.preventDefault();
    if (name) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setName("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setName("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (minPrice && maxPrice) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByPrice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ minPrice, maxPrice }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setMaxPrice("");
            setMinPrice("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setMaxPrice("");
          setMinPrice("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (city) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByCity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setCity("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setCity("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (country) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByCountry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setCountry("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setCountry("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (street) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByStreet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ street }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setStreet("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setStreet("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (type) {
      fetch("http://127.0.0.1:8000/api/auth/getAllHallsByType", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
            setType("");
          }
        })
        .then((data) => {
          if (data.data == null) {
            Swal.fire({
              title: `No Matched Halls`,
              showCancelButton: false,
            });
          } else {
            setAllHalls(data.data);
          }
          setType("");
        })
        .catch((error) => {
          console.error(error);
        });
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
      <NavbarWithSideBar />

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
                    <label htmlFor="country">Country:</label>
                    <input
                      className="name-input"
                      type="text"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                    <label htmlFor="street">Street:</label>
                    <input
                      className="name-input"
                      type="text"
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                  <div className="search-input-container">
                    <label htmlFor="type">Type:</label>
                    <input
                      className="name-input"
                      type="text"
                      id="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                  <div className="search-input-container">
                    <label htmlFor="capacity">Min Price:</label>
                    <input
                      type="number"
                      id="minPrice"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div className="search-input-container">
                    <label htmlFor="capacity">Max Price:</label>
                    <input
                      type="number"
                      id="maxPrice"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
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
