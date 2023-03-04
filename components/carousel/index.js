"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Carousel({ categories }) {
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={4.5}
        navigation={true}
        pagination={false}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide>
            <a href={`/${category.id}`}>
              <div>{category.name}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
