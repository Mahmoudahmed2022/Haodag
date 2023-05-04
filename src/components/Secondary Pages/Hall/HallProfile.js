import React, { useEffect, useState } from "react";
import "../../../Css/HallProfile.css";

import image7 from "../../images/map.jpg";


import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaHeart, FaPhoneAlt, FaStar, FaThumbsDown, FaThumbsUp, FaUserTie } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import CommentSection from "../Cards/CommentSection";
import InfoDescription from "../Hall/Component In Hall details/InfoDescription";
import InfoForMap from "../Hall/Component In Hall details/InfoForMap";
import InfoServices from "../Hall/Component In Hall details/InfoServices";
import InfoShow from "../Hall/Component In Hall details/InfoShow";
import Modal from "../Modals/Modal";
import ImageSlider from "./Component In Hall details/ImageSlider ";
// import Slider from "../../Slider";
import ModalForAskToBook from "../Modals/ModalForAskToBook";

const HallProfile = ({ rating, isFavourite }) => {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [show, setShow] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [hover, setHover] = useState(null);
  const [Like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [heartStyle, setHeartStyle] = useState({ color: "white" });
  const [toggle, setToggle] = useState(true);
  const [LikeStyle, setLikeStyle] = useState({ color: "white" });
  const [disLikeStyle, setDisLikeStyle] = useState({ color: "white" });
  let phoneNumber = "0";
  const [products, setProducts] = useState([]);
  let message="!"
  const allData = async (title) => {
    // const api2 = "https://fakestoreapi.com/products";
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

  const [visible, setVisible] = useState(5);

  const loadMore = () => {
    setVisible(visible + 5);
  };//201555578007
  const urlWhatSap = () => {
    phoneNumber = "201026249568"; // replace with the phone number you want to chat with
    message = "Hello!"; // replace with the message you want to send
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`

      //`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };
  
  // const [starStyle, setStarStyle] = useState({ color: "white" });
  // const [toggle1, setToggle1] = useState(true);
  // const [toggle3, setToggle3] = useState("5");

  const handleHover = (ratingValue) => {
    setHover(ratingValue);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };
  // function handleClickStar(i) {

  //   setStarStyle({ color: "gold" });
  //   setToggle1(!toggle1);
  // }
  // function handleOutClickStar() {

  //   setStarStyle({ color: "white" });
  //   setToggle1(!toggle1);
  // }
  function handleClick() {
    setHeartStyle({ color: "red" });
    setToggle(!toggle);
  }
  function handleClick2() {
    setHeartStyle({ color: "white" });
    setToggle(!toggle);
  }
  const handleLike = () => {
    setDisLikeStyle({ color: "white" });
    setDisLike(!disLike);

    setLikeStyle({ color: "blue" });
    setLike(!Like);
  };
  const removeColor = () => {
    setLikeStyle({ color: "white" });
    setLike(!Like);
    console.log("colorRemoved");
  };
  const handleDislike = () => {
    setLikeStyle({ color: "white" });
    setLike(!Like);
    setDisLikeStyle({ color: "blue" });
    setDisLike(!disLike);
  };
  const removeDislikeColor = () => {
    setDisLikeStyle({ color: "white" });
    setDisLike(!disLike);
    console.log("colorRemoved");
  };



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
            <Link className="contactWUs" onClick={() => setShow(true)}>
              <AiOutlineMail className="colorSvg1" />
              <p className=" pWhatsap">Contact (email)</p>
            </Link>
             <Modal   onClose= {()=>setShow(false)} show = {show} />

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
          <div className="dataModalContact">
            <div className="contactWUs" to="/modal">
              
              <Link className="askBooking" onClick={() => setShowBook(true)}><BiMailSend className="colorSvg1" />Ask To Book</Link>
              <ModalForAskToBook   onClose= {()=>setShowBook(false)} show = {showBook}/>
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
          <div className="topShape"></div>

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
          <InfoDescription products={products} />
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
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        // style={starStyle}
                        // onClick={toggle1 ? handleClickStar : handleOutClickStar }
                        // onClick={() => {toggle1 ? handleClickStar(ratingValue) : handleOutClickStar(ratingValue)  }}
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
                <FaHeart
                  className="heartLoveSvg "
                  // color={1 <= (hoverHeart || false ) ? "red" : ""}
                  style={heartStyle}
                  onClick={toggle ? handleClick : handleClick2}
                />
              </div>
            </div>
            <div className="thirdColLike">
              <p>Did You Like This </p>
              <div className="heartLove">
                <FaThumbsDown
                  className="LikeIcon "
                  // color={(Like) ? "#243b55" : ""}
                  style={disLikeStyle}
                  onClick={disLike ? handleDislike : removeDislikeColor}
                />
                <FaThumbsUp
                  className="LikeIcon"
                  // color={ (disLike) ? "#243b55" : ""}
                  style={LikeStyle}
                  onClick={Like ? handleLike : removeColor}
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

      <CommentSection />
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
