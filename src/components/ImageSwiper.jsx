import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper";

export default function ImageSwiper() {
  return (
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
            delay: 6500,
            disableOnInteraction: false
          }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide><img className="h-full w-full" src="../../images/sw2.jpg"/></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="../../images/sw3.jpg"/></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="../../images/sw7.jpg"/></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="../../images/sw5.jpg"/></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="../../images/sw6.jpg"/></SwiperSlide>
      </Swiper>
  )
    }

