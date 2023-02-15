import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Css/Cards.css";

function Cards() {
  const [deals, setDeals] = useState([]);
  const [visible, setVisible] = useState(5);

  const alldeals = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setDeals(data.data);
    });
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    alldeals();
  }, []);

  const renderCard = (deals) => {
    return (
      <>
        <ul class="cards">
          <div className="card" key={deals.id}>
            <div className="img-div">
              <img
                className="card__image"
                src={deals.image}
                alt={deals.title}
              ></img>
            </div>
            <div class="card__overlay">
              <div className="card__header">
                {deals.title}
                <div class="card__header-text">
                  <h3 class="card__title">{deals.category}</h3>
                </div>
              </div>
              <p class="card__description">{deals.description}</p>
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
      <div className="for-button">
        {visible < deals.length && (
          <button className="more" onClick={loadMore}>
            Load 5 More
          </button>
        )}
      </div>
    </>
  );
}

export default Cards;
