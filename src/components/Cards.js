import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Css/Cards.css";

function Cards() {
  const [deals, setDeals] = useState([]);
  const [visible, setVisible] = useState(6);

  const alldeals = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setDeals(data.data);
    });
  };

  const loadMore = () => {
    setVisible(visible + 6);
  };

  useEffect(() => {
    alldeals();
  }, []);

  const renderCard = (deals) => {
    return (
      <>
        <ul className="cards">
          <div className="card" key={deals.id}>
            <div className="img-div">
              <img
                className="card__image"
                src={deals.image}
                alt={deals.title}
              ></img>
            </div>
            <div className="card__overlay">
              <div className="card__header">
                {deals.title}
                <div className="card__header-text">
                  <h3 className="card__title">{deals.category}</h3>
                </div>
              </div>
              <p className="card__description">{deals.description}</p>
            </div>
          </div>{" "}
        </ul>
      </>
    );
  };
  return (
    <>
      <div className="deals-container">
        {deals.slice(0, visible).map(renderCard)}
      </div>
      <div className="card-for-button">
        {visible < deals.length && (
          <button className="more" onClick={loadMore}>
            Load 6 More
          </button>
        )}
      </div>
    </>
  );
}

export default Cards;
