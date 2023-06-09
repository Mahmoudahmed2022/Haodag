import React, { useEffect, useState } from "react";
import "../../../Css/HallProfile.css";
import image7 from "../../images/map.jpg";
import Swal from "sweetalert2";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import {
  FaHeart,
  FaPhoneAlt,
  FaStar,
  FaThumbsDown,
  FaThumbsUp,
  FaUserTie,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CommentSection from "../Cards/CommentSection";
import InfoDescription from "../Hall/Component In Hall details/InfoDescription";
import InfoForMap from "../Hall/Component In Hall details/InfoForMap";
import InfoServices from "../Hall/Component In Hall details/InfoServices";
import InfoShow from "../Hall/Component In Hall details/InfoShow";
import Modal from "../Modals/Modal";
import ImageSlider from "./Component In Hall details/ImageSlider ";
// import Slider from "../../Slider";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";
import ModalForAskToBook from "../Modals/ModalForAskToBook";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
const HallProfile = ({ rating, isFavourite }) => {
  const navigate = useNavigate();
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(null);
  const [Like, setLike] = useState(false);
  const [isFavourited, setIsFavourited] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [heartStyle, setHeartStyle] = useState({ color: "white" });
  const [toggle, setToggle] = useState(true);
  const [LikeStyle, setLikeStyle] = useState({ color: "white" });
  const [disLikeStyle, setDisLikeStyle] = useState({ color: "white" });
  let phoneNumber = "0";
  const [products, setProducts] = useState([]);
  const [hall, sethall] = useState([]);

  const personData = useContext(MyContext);
  const [ownerData, setOwnerData] = useState([]);

  let message = "!";
  const { hallId } = useParams();
  console.log(hallId);

  const allData = async (hallId) => {
    const api = `http://127.0.0.1:8000/api/auth/getHall/${hallId}`;
    await fetch(api)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProducts(response);
        sethall(response.data);
        setOwnerData(response.data.owner);
      })
      .catch((err) => console.error(err));
  };
  function IsFavourite() {
    fetch(`http://127.0.0.1:8000/user/auth/isFavourite/${hallId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsFavourited(data.is_favourite);
      });
  }

  function AddToFavourites() {
    fetch(`http://127.0.0.1:8000/user/auth/addFavourite/${hallId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: `Hall ${data.message}`,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
  }
  function AddLike() {
    fetch(`http://127.0.0.1:8000/user/auth/halls/${hallId}/addLike`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: data.message,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setLike(true)
            console.log(result)
            window.location.reload();
          }
        });
      });
  }

  function goToaAskToBook() {
    navigate(`/BookHall/${hallId}`);
  }
  console.log(isFavourited, hall);

  useEffect(() => {
    allData(hallId);
    urlWhatSap();
    IsFavourite();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //201555578007
  const urlWhatSap = () => {
    phoneNumber = "201026249568"; // replace with the phone number you want to chat with
    message = "Hello!"; // replace with the message you want to send
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`

      //`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };

  const handleHover = (ratingValue) => {
    setHover(ratingValue);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };

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
  const goToProfile = () => {
    navigate(`/owner/${hall.owner.id}`, {
      state: { userData: ownerData },
    });
  };

  return (
    <>
      <NavbarWithSideBar />
      <div className="allHallProfile">
        <h1 className="hallName">{hall.name}</h1>
        {/* Slider */}
        <div className="imageSlider">
          <div className="img-slid">
            {" "}
            <ImageSlider products={products} />
          </div>
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
              <Modal onClose={() => setShow(false)} show={show} />

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
                <p className=" pWhatsap" onClick={goToProfile}>
                  <FaUserTie className="colorSvg1" /> Owner :{ownerData?.name}
                </p>
              </div>
              <div className="phonec">
                <FaPhoneAlt className="" />
                <p className="pWhatsap">+165156</p>
              </div>
            </div>
            <div className="dataModalContact">
              <div className="contactWUs" to="/modal">
                <button className="askBooking" onClick={goToaAskToBook}>
                  <BiMailSend className="colorSvg1" />
                  Ask To Book
                </button>
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
                    style={isFavourited ? { color: "red" } : heartStyle}
                    onClick={() => {
                      toggle ? handleClick() : handleClick2();
                      AddToFavourites();
                    }}
                  />
                </div>
              </div>
              <div className="thirdColLike">
                <p>Did You Like This </p>
                <div className="heartLove">
                  <FaThumbsUp
                    className="LikeIcon"
                    // color={ (disLike) ? "#243b55" : ""}
                    style={LikeStyle}
                    onClick={() => {AddLike();

                    }}
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

              <div className="thirdColLike">
                <p>Number Of Likes </p>
                <div className="PheartLove">
                  <div className="likeDown1 ">
                    <FaThumbsUp className="heartLoveSvg" />
                    <p>{hall.likes_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {personData && (
          <CommentSection personData={personData} hallId={hallId} />
        )}
      </div>
    </>
  );
};

export default HallProfile;
