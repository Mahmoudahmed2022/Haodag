import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlanSlider from "./PlanSlider";
function PlanDetails(props) {
  const [product, setProduct] = useState({});
  const [slidimg, setSlidImg] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";

  const Plan = () => {
    axios.get(`${api_url}/${params.plannerId}`).then((data) => {
      setProduct(data.data);
    });
  };
  const photo = async (title) => {
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=e2381709";
    await fetch(`${api}&s=${title}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.Search);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    Plan();
    photo("Batman");
  }, []);

  return (
    <>
      <div className="Plan-big-cont">
        <div className="plantit">
          <h1 className="PlanName">{product.title} </h1>
        </div>
        <div className="plan-slider">
          <PlanSlider slidimgs={slidimg} />
        </div>
      </div>
    </>
  );
}

export default PlanDetails;
