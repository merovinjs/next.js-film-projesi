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
import Link from "next/link";

export default function Carousel({ categories }) {
  return (
    <>
      <Swiper
        spaceBetween={19}
        slidesPerView={4}
        navigation={true}
        pagination={false}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <div className="container">
          {categories.map((category) => (
            <SwiperSlide>
              <Link href={`/${category.id}`}>
                <div>{category.name}</div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
