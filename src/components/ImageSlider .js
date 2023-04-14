import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function ImageSlider(props) {
  // const [images, setImages] = useState([]);
  const products1 = props.products;

  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products')
  //     .then(response => {
  //       setImages(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <div className="media" >

      {/* <CarouselProvider
        className="PureCarousel "
        naturalSlideWidth={600}
        naturalSlideHeight={400}
        totalSlides={products1.length}
      >
        <Slider className="PureCarousel_Slider ">
          {products1.map((image, index) => (
            <Slide className="PureCarousel_Slide " index={index} key={index}>
              <img
                className="PureCarousel_Image "
                src={image.Poster}
                alt={`Slide ${index + 1}`}
              />
            </Slide>
          ))}
        </Slider>
        <div className="butns">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
       
        <DotGroup className="groupDots PureCarousel_DotGroup " />
      </CarouselProvider> */}


      <Carousel showThumbs={false} showIndicators={false}>
        {products1.map((image, index) => (
          <div className="media" key={index} >
            <img  src={image.Poster} alt={image.Title} style={{ width: '100%', height: '100%',borderRadius:'10px' }} />
          </div>
        ))}
      </Carousel>


    </div>

      {/* <Carousel width={900} height={400} showArrows autoPlay>
      {products1.map((image) => (
        <img key={image.imdbID} src={image.Poster} alt={image.Title} />
      ))}
    </Carousel> */}

      {/* <CarouselProvider
        className="PureCarousel "
        naturalSlideWidth={700}
        naturalSlideHeight={400}
        totalSlides={products1.length}
      >
        <Slider className="PureCarousel_Slider ">
          {products1.map((image, index) => (
            <Slide className="PureCarousel_Slide " index={index} key={index}>
              <img
                className="PureCarousel_Image "
                src={image.Poster}
                alt={`Slide ${index + 1}`}
              />
            </Slide>
          ))}
        </Slider>
        <div className="buttons-backnext">
          <ButtonBack className="button-back">Back</ButtonBack>
          <ButtonNext className="button-next">Next</ButtonNext>
        </div>
      </CarouselProvider> */}

      {/* <CarouselProvider
        className="PureCarousel "
        naturalSlideWidth={500}
        naturalSlideHeight={300}
        totalSlides={products1.length}
      >
        <Slider className="PureCarousel_Slider ">
          {products1.map((image, index) => (
            <Slide className="PureCarousel_Slide " index={index} key={index}>
              <img
                className="PureCarousel_Image "
                src={image.Poster}
                alt={`Slide ${index + 1}`}
              />
            </Slide>
          ))}
        </Slider>
        <div className="buttons-backnext">
          <ButtonBack className="button-back">Back</ButtonBack>
          <ButtonNext className="button-next">Next</ButtonNext>
        </div>

        <DotGroup className="PureCarousel_DotGroup " />
      </CarouselProvider> */}

      {/* <CarouselProvider
        className="PureCarousel "
        naturalSlideWidth={600}
        naturalSlideHeight={400}
        totalSlides={products1.length}
      >
        <Slider className="PureCarousel_Slider ">
          {products1.map((image, index) => (
            <Slide className="PureCarousel_Slide " index={index} key={index}>
              <img
                className="PureCarousel_Image "
                src={image.Poster}
                alt={`Slide ${index + 1}`}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup className="PureCarousel_DotGroup " />
      </CarouselProvider> */}
    </>
  );
}

export default ImageSlider;
