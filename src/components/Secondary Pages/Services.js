import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./Cards/ServiceCard";
import "../../Css/Service.css";
const Services = ({ userData, isLogin }) => {
  const [visible, setVisible] = useState(5);
  const [supplierServiceCard, setSupplierServiceCard] = useState([]);

  const loadMore = () => {
    setVisible(visible + 5);
  };
  const getSupplierServiceCard = () => {
    fetch(
      `http://127.0.0.1:8000/api/auth/getAllSupplierServices/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  function Cake() {
    fetch(`http://127.0.0.1:8000/api/auth/getSupplierAllcake/${userData.id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function Catering() {
    fetch(
      `http://127.0.0.1:8000/api/auth/getSupplierAllcatering/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function BodyCare() {
    fetch(
      `http://127.0.0.1:8000/api/auth/getSupplierAllbodycare/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function Flowers() {
    fetch(
      `http://127.0.0.1:8000/api/auth/getAllSupplierFlowers/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function Cars() {
    fetch(`http://127.0.0.1:8000/api/auth/getSupplierAllcar/${userData.id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function ZaffatAndDj() {
    fetch(
      `http://127.0.0.1:8000/api/auth/getAllSupplierZaffatAndDj/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function Jallery() {
    fetch(
      `http://127.0.0.1:8000/api/auth/getSupplierAlljallery/${userData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  console.log(supplierServiceCard);
  useEffect(() => {
    getSupplierServiceCard();
  }, []);
  return (
    <>
      <div className="halls">
        <h1 className="fav-head">Services</h1>

        <div className="catogries">
          <button class="button-arounder" onClick={getSupplierServiceCard}>
            All Services
          </button>
          <button class="button-arounder" onClick={Cake}>
            Cake
          </button>
          <button class="button-arounder" onClick={ZaffatAndDj}>
            Zaffat And Dj
          </button>
          <button class="button-arounder" onClick={Catering}>
            Catering
          </button>
          <button class="button-arounder" onClick={BodyCare}>
            Body Care
          </button>
          <button class="button-arounder" onClick={Flowers}>
            Flowers
          </button>
          <button class="button-arounder" onClick={Cars}>
            Cars
          </button>
          <button class="button-arounder" onClick={Jallery}>
            Jallery
          </button>
        </div>
        <div className="home-allhalls-container">
          {supplierServiceCard?.length > 0 ? (
            <>
              {supplierServiceCard?.slice(0, visible).map((data, index) => (
                <ServiceCard
                  userData={userData}
                  key={index}
                  cardData={data}
                  isLogin={isLogin}
                />
              ))}
              <div className="for-button">
                {visible < supplierServiceCard.length && (
                  <button className="more" onClick={loadMore}>
                    Load 5 More
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <h2>No Services Found ...</h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Services;
