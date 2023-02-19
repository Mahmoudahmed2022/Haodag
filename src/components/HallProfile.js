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

import InfoForMap from "./InfoForMap";
import ImageSlider from "./ImageSlider ";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import InfoShow from "./InfoShow";
import InfoServices from "./InfoServices";
import { FaHandshake } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";


import { FaPhoneAlt } from "react-icons/fa";

const HallProfile = ({rating,isFavourite}) => {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  let phoneNumber = "0";
  let message = "!";
  const [products, setProducts] = useState([]);
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
    urlWhatSap();
  }, []);

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
        </div>
      </>
    );
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
  const urlWhatSap = () => {
    phoneNumber = "01156349259"; // replace with the phone number you want to chat with
    message = "Hello!"; // replace with the message you want to send
    setWhatsappUrl(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };
  const [hover, setHover] = useState(null);
 const [hoverHeart, setHoverHeart] = useState(null);
 const [Like, setLike] = useState(false);
 const [disLike, setDisLike] = useState(false);
const [heartStyle,setHeartStyle] = useState({ color: 'white'})
const [toggle, setToggle] = useState(true);
const [LikeStyle,setLikeStyle] =useState({color:'white'})
const [disLikeStyle,setDisLikeStyle] =useState({color:'white'})

  const handleHover = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };
  function handleClick() {
    setHeartStyle({ color: 'red' });
    setToggle(!toggle);
  }
  function handleClick2() {
    setHeartStyle({ color: 'white' });
    setToggle(!toggle);

  }
  const handleLikeDislike = () =>{
   
      setDisLikeStyle({color:'white'})
      setDisLike(!disLike);
    
    setLikeStyle({color:'blue'});      
    setLike(!Like);
  }
  const removeColor = () =>{
    setLikeStyle({color:'white'});      
    setLike(!Like);
    console.log("colorRemoved")
} 

const handleDislike = () =>{
  setLikeStyle({color:'white'});      
  setLike(!Like);
  setDisLikeStyle({color:'blue'});      
  setDisLike(!disLike);
}
const removeDislikeColor = () =>{
  setDisLikeStyle({color:'white'});      
  setDisLike(!disLike);
  console.log("colorRemoved")
} 
let temp;
  
  return (
    <div className="allHallProfile">
      <h1 className="hallName">Hall's Name </h1>
      {/* Slider */}
      <div className="imageSlider">
        <ImageSlider products={products} />
        <div className="mapAndData">
          <InfoForMap
            className="singleInfoMap"
            products={products}
            img={image7}
          />
          <div className="dataModalContact">
            <Link className="contactWUs" to="/modal">
              <FaHandshake className="colorSvg1" />
              <p className=" pWhatsap">Contact (email)</p>
            </Link>
            <div className="whatsap">
              <a className="linkWhats" href={whatsappUrl} target="_blank">
                <AiOutlineWhatsApp className="colorSvg" />
                <p className="pWhatsap">Contact (Whatsap)</p>
              </a>
            </div>

            <div className="locationsvg">
              <GoLocation />
              <p className="pLocation">Location</p>
            </div>
          </div>

          <div className="dataModalContact">
            <div className="contactWUs" to="/modal">
              <FaUserTie className="colorSvg1" />
              <p className=" pWhatsap">Owner : Kariem</p>
            </div>
            <div className="phonec">
              <FaPhoneAlt className="" />
              <p className="pWhatsap">+165156</p>
            </div>
          </div>
        </div>
      </div>

      {/* End Slider */}
      {/* information */}

      {/* <div className="hallInfo">{infoElement}</div> */}
      <div className="contDataa">
        <div className="contDataInfo">
          <div className="allContInfo">
            <div className="card-content">
              <h2 className="section__title">The Amplitude</h2>
              <ul className="uiForInfo">
                <li className="liElement">
                  <p className="pForInfo">The price is per person</p>
                  <p className="pForData">300-350 pound</p>
                </li>
                <li className="liElement">
                  <p className="pForInfo">Hall capacity</p>
                  <p className="pForData">250-100 people</p>
                </li>
                <li className="liElement">
                  <p className="pForInfo">food court capacity</p>
                  <p className="pForData">250-100 people </p>
                </li>
                <li className="liElement">
                  <p className="pForInfo">How many rooms are in the Hall?</p>
                  <p className="pForData">two Rooms</p>
                </li>
                <li className="liElement">
                  <p className="pForInfo">Type</p>
                  <p className="pForData">Open/Closed Air</p>
                </li>
                <li className="liElement">
                  <p className="pForInfo">Available</p>
                  <p className="pForData">3 : 12 PM</p>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <InfoShow products={products} />
          <InfoServices products={products} />
        </div>

        <div className="contReview">
          <div className="reviewF">
            <div className="firstColRate">
              <p>Put Rate</p>
              <div className="rating-stars">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <FaStar
                className="star"
               
                color={ratingValue <= (hover || rating ) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => handleHover(ratingValue)}
                onMouseLeave={handleMouseLeave}
               
                  
              />
            </label>
          );
        })}
      </div>
            </div>
            <div className="secondColLove">
              <p>Add To Fav</p>
              <div className="heartLove ">
                <FaHeart className="heartLoveSvg "
                // color={1 <= (hoverHeart || false ) ? "red" : ""}
                style={heartStyle}
                onClick={ toggle? handleClick :handleClick2}
                 />
              </div>
            </div>
            <div className="thirdColLike">
              <p>Did You Like This </p>
              <div className="heartLove">
                <FaThumbsDown className="LikeIcon "
                // color={(Like) ? "#243b55" : ""}
                style={disLikeStyle}
                onClick={disLike? handleDislike: removeDislikeColor}
              
                />
                <FaThumbsUp className="LikeIcon"
                // color={ (disLike) ? "#243b55" : ""}
                style={LikeStyle}
                onClick={Like? handleLikeDislike: removeColor}
                />
              </div>
            </div>
          </div>

          <div className="reviewS">
            <div className="firstColRate">
              <p>Rating Percentage</p>
              <div className="manyStarsR">
                <div>
                  <FaStar className="likeDown" />
                  <span className="likeDown1">15</span>
                </div>
                <div>
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <span className="likeDown1">15</span>
                </div>
                <div>
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <span className="likeDown1">15</span>
                </div>
                <div>
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <span className="likeDown1">15</span>
                </div>
                <div>
                  <FaStar className="likeDown " />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <FaStar className="likeDown" />
                  <span className="likeDown1">15</span>
                </div>
              </div>
            </div>
            <div className="secondColLove">
              <p>Number Of Visits</p>
              <p>100</p>
            </div>
            <div className="thirdColLike">
              <p>Number Of Likes </p>
              <div className="PheartLove">
                <div className="likeDown1">
                  <FaThumbsDown className="heartLoveSvg" />
                  <p>2</p>
                </div>
                <div className="likeDown1 ">
                  <FaThumbsUp className="heartLoveSvg" />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Video */}
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

{
  /* <motion.div ref={carouselRef} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {count()}
        </motion.div>
      </motion.div> */
}

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
