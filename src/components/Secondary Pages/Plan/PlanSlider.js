import Carousel from "nuka-carousel/lib/carousel";
import React, { useState } from "react";
// import image1 from "../components/images/12.jpeg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../Css/PlanSlider.css";

function PlanSlider(props) {
  const plannId = useParams();
  console.log(plannId);
  const [products, setProducts] = useState([]);
  const allData = async (title) => {
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=e2381709";
    await fetch(`${api}&s=${title}`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.Search);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    allData("Batman");
  }, []);
  return (
    <>
      <Carousel wrapAround={true} slidesToShow={3} autoplay={(true, 3000)}>
        {products.map((image, index) => (
          <img
            className="planslider-img "
            src={image.Poster}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </>
  );
}

export default PlanSlider;
