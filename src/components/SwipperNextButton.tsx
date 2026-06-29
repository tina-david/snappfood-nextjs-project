import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useSwiper } from "swiper/react";

const SwipperNextButton = () => {
  const swiper=useSwiper()
    return (
    
    <div onClick={()=>swiper.slideNext()}
     className="rounded-full z-50 absolute top-36 left-0 p-4 cursor-pointer shadow-shadows-medium hover:shadow-shadows-high bg-white">
      <MdArrowBackIos color="#ff00a6" />
    </div>
  );
};

export default SwipperNextButton;
