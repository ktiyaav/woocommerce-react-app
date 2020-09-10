import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <>
    <Carousel showIndicators={false} showStatus={false} showThumbs={false} stopOnHover={false}>
    <div>
      <img src={require('../assets/images/slider/1.png')} />
    </div>
    <div>
      <img src={require('../assets/images/slider/2.png')} />
    </div>
    <div>
      <img src={require('../assets/images/slider/3.png')} />
    </div>
  </Carousel>
  </>
  );
}

export default Banner;
