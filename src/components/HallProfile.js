import React, { useEffect, useRef, useState } from "react";
import "../Css/HallProfile.css";
import { motion } from "framer-motion";
import image from "./images/chair1.jpg";
import image1 from "./images/price.jpg";
import image2 from "./images/tables1.jpg";
import image3 from "./images/openclosed.jpg";
import image4 from "./images/time.jpg";
import image5 from "./images/shows.jpg";
import image6 from "./images/services.jpg";
import image7 from "./images/map.jpg";
// import image8 from "./images/phone.jpg";
// import image9 from "./images/address.jpg";

// import image1 from "./images/mostafa.jpg";
// import image3 from "./images/hall1.jpeg";
// import image4 from "./images/hall2.jpeg";
// import image5 from "./images/hall3.jpeg";
// import Info1ForHallCapacity from "./Info1ForHallCapacity";
import InfoForMap from "./InfoForMap";

const HallProfile = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const [products, setProducts] = useState([]);

  // const infoElement = products.map((item) => {
  //   const replaced = item.Title;
  //   const replacedItem = replaced.split(' ').join('')
  //   return (
  //     <Info1ForHallCapacity
  //       key={item.imdbID}
  //       className="singleInfo"
  //       title={item.Title}
  //       year={item.Year}
  //       img={image} //item.image from api
  //       showButton={true} //item.is
  //       pathD={replacedItem}
  //     />
  //   );
  // });

  // const replaceSpace = products.map((item) => {
    
  //     const replaced = item.Title;
  //     console.log(replaced.split(' ').join(''))

  // });
  const allData = async (title) => {
    const api2 = "https://fakestoreapi.com/products";
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=e2381709";
    await fetch(`${api}&s=${title}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.Search);
        console.log("from api");
        setProducts(response.Search);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    allData("Batman");
    forWIdth();
    // console.log(carouselRef.current.scrollWidth);

    // console.log(carouselRef.current.offsetWidth);
  }, []);

  const forWIdth = () => {
    setWidth(5000 - carouselRef.current.offsetWidth);
  };

  const count = () => {
    return products.map((data) => (
      <motion.div className="item" key={data.imdbID}>
        <img src={data.Poster} alt={data.title} />
      </motion.div>
    ));
  };
  const [visible, setVisible] = useState(5);

  const loadMore = () => {
    setVisible(visible + 5);
  };
  const renderCard = (cardData) => {
    return (
      <>
        <div className="" key={cardData.imdbID}>
          <div className="img-div">
            <img
              className="hall-img"
              src={cardData.Poster}
              alt={cardData.Title}
            ></img>
          </div>
          {/* <div className="hall-body">
              <button className="details-btn s-d-hover" href="#">
                Details
              </button>
            </div> */}
        </div>
      </>
    );
  };
  return (
    <div className="allHallProfile">
      {/* Slider */}
      <h1 className="hallName">Hall's Name </h1>
      <motion.div ref={carouselRef} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {count()}
        </motion.div>
      </motion.div>
      {/* End Slider */}
      {/* information */}
      <h1 className="headInfoTop">Information About Hall</h1>

      {/* <div className="hallInfo">{infoElement}</div> */}
      
      <div className="mapAndData">
        <InfoForMap
          className="singleInfoMap"
          products={products}
          img={image7}
        />
      </div>



      <div className="allhalls-container2">
        {products.slice(0, visible).map(renderCard)}
      </div>
      <div className="for-button2">
        {visible < products.length && (
          <button className="more1" onClick={loadMore}>
            Load 5 More
          </button>
        )}
      </div>
    </div>
  );
};

export default HallProfile;
