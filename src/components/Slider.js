import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Slider.css";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setImages(response.data);
    };

    fetchImages();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

//   const handleMouseSlide = (event) => {
//     const sliderWidth = event.target.offsetWidth;
//     const offsetX = event.nativeEvent.offsetX;
//     const slideWidth = sliderWidth / images.length;
//     const newSlide = Math.floor(offsetX / slideWidth);
//     setCurrentSlide(newSlide);
//   };

  return (
    <div className="slider"
    //  onMouseMove={handleMouseSlide}
     >
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrevSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={handleNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
