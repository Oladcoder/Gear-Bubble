import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";


const Testimonials = () => {
  return (
    <div className='mt-10 h-9h'>
<div><h1 className="text-6xl text-pritext border-pritext border-b-2 w-2/3"> TESTIMONIALS </h1>
        </div>

        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10 sm:h-96"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Testimonials


