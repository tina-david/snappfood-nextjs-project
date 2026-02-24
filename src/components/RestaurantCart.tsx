"use client";
import { convertToPersian } from "@/utils/convertToPersian";
import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

const RestaurantCart = ({ restaurant }) => {
  return (
    <div className="flex flex-wrap w-full shadow-shadows-medium hover:shadow-shadows-high">
      <div className="w-full h-36 rounded-t-xl relative">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
    
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          style={{
          
            borderRadius: "8px 8px 0 0",
          }}
        />
        <div className="absolute bg-white top-8 rounded-tl-xl rounded-bl-xl py-1 text-secondary-main text-sm">
          {restaurant.pay}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center -mt-8 z-40">
        <div className="w-20 h-20 border-white border-solid border-4">
          <Image
            src={restaurant.logo}
            alt={restaurant.name}
            width={100}
            height={100}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
        <div className="mt-4 text-lg font-bold">{restaurant.name}</div>
        <div className="flex my-1 text-sm items-center">
          <MdOutlineStar style={{ color: "#facb0f", marginLeft: "2px" }} />
          {`${convertToPersian(restaurant.star)} (${convertToPersian(restaurant.rate)})`}
        </div>
        <div className="flex my-4 text-sm">
          <Image
            src={restaurant.delivery.icon}
            alt={""}
            width={16}
            height={16}
            style={{ marginLeft: "4px" }}
          />
          {restaurant.delivery.type}
          {`${convertToPersian(restaurant.delivery.price)}تومان`}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCart;
