import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";


const Testimonials = () => {
  return (
    <div className='mt-10 h-9h xsm:mt-80'>
<div><h1 className="text-6xl text-pritext xsm:text-5xl border-pritext border-b-2 w-2/3"> TESTIMONIALS </h1>
        </div>

        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper text-pritext mt-10 sm:h-96"
      >
        <SwiperSlide className="text-black flex justify-center items-center w-full pl-5 font-light xsm:text-base sm:text-base text-4xl">"The very best. Gear Bubble is the most valuable business resource we have EVER purchased. Gear Bubble is worth much more than I paid. Gear Bubble has completely surpassed our expectations."
- Jobye O.</SwiperSlide>
        <SwiperSlide className="text-black flex justify-center items-center w-full pl-5 font-light xsm:text-base sm:text-base text-4xl">"I will let my mum know about this, she could really make use of Gear Bubble! Gear Bubble was worth a fortune to my company. The service was excellent."
- Taite G.</SwiperSlide>
        <SwiperSlide className="text-black flex justify-center items-center w-full pl-5 font-light xsm:text-base sm:text-base text-4xl">"I like Gear Bubble more and more each day because it makes my life a lot easier. Not able to tell you how happy I am with Gear Bubble. Gear Bubble is awesome! If you want real marketing that works and effective implementation - Gear Bubble's got you covered."
- Theresa C.</SwiperSlide>
        <SwiperSlide className="text-black flex justify-center items-center w-full pl-5 font-light xsm:text-base sm:text-base text-4xl">"Not able to tell you how happy I am with Gear Bubble. Gear Bubble is great. I will recommend you to my colleagues. It's all good. "
- Cecily N.</SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Testimonials


