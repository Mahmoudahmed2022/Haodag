import Carousel from "nuka-carousel/lib/carousel";
import React, { useState } from "react";
// import image1 from "../components/images/12.jpeg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../Css/PlanSlider.css";
import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";

function PlanSlider({plan}) {
  console.log(plan);
  return (
    <>
       <div className="imageInslider">
        <CarouselProvider
          className="PureCarousel "
          naturalSlideWidth={800}
          naturalSlideHeight={600}
          totalSlides={plan?.photos?.length}
        >
          <Slider className="PureCarousel_Slider ">
            {plan?.photos?.map((image, index) => (
              <Slide className="PureCarousel_Slide " index={index} key={index}>
                <img
                  className="PureCarousel_Image "
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Slide>
            ))}
          </Slider>
          <div className="butns">
            <ButtonBack className="btnnextback">Back</ButtonBack>
            <ButtonNext className="btnnextback">Next</ButtonNext>
          </div>

          <DotGroup className="groupDots gap dott" />
        </CarouselProvider>
        {/* <Carousel width={900} height={400} showArrows>
          {products1.map((image) => (
            <img key={image.imdbID} src={image.Poster} alt={image.Title} />
          ))}
        </Carousel> */}
      </div>
    </>
  );
}

export default PlanSlider;
