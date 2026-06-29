import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { DATABASE } from "@/data/data";
import RestaurantCart from "./RestaurantCart";
import SwipperNextButton from "./SwipperNextButton";
import SwipperPrevButton from "./SwipperPrevButton";
const Slide = () => {
  return (
    <div className="flex w-full max-w-7xl flex-wrap my-16">
      <div className="flex w-full my-4 font-bold text-lg">
        <div>{"تازه ها در اسنپ فود"}</div>
      </div>
      <div className="relative flex w-full flex-wrap p-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwipperPrevButton />
          <SwipperNextButton />
          {DATABASE.restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <RestaurantCart restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
