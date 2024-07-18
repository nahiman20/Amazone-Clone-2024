import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



function CarouselEffect() {
  return (
    <div>
    <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
    >
    {
        img.map((imageItemLink) => {
            return <img src={imageItemLink}/>
        })
    }




    </Carousel>
    </div>
  );
}

export default CarouselEffect