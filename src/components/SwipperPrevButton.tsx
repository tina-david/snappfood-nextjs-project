import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import Swiper from 'swiper'
import { useSwiper } from 'swiper/react'

const SwipperPrevButton = () => {
      const swiper=useSwiper()

  return (

    <div onClick={()=>swiper.slidePrev()}
     className="rounded-full z-50 absolute top-36 right-0 p-4 cursor-pointer shadow-shadows-medium hover:shadow-shadows-high bg-white">
      <MdArrowBackIos color="#ff00a6" className='rotate-180' />
    </div>  )
}

export default SwipperPrevButton