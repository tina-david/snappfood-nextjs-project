import Image from "next/image";
import React from "react";
import Contactus from "../../public/images/shop.png";
import { MdOutlineShoppingBag } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="flex flex-wrap w-full my-16 max-w-7xl">
      <div className="flex justify-between rounded-xl p-8 bg-body-color  w-full">
        <div className="w-full md:w-1/2 ">
          <div className="text-3xl font-bold text-carbon-main">
            {"صاحب کسب و کار هستید؟"}
          </div>
          <div className="my-8 text-xl text-carbon-main">
            {
              "با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید."
            }
          </div>
          <div>
            <button className="bg-primary-main flex text-white px-3 py-2 rounded-lg text-xl items-center">
              {"  ثبت نام فروشندگان"} <MdOutlineShoppingBag />
            </button>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex justify-end ">
          <Image src={Contactus} alt="contact-us" width={340} height={340} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
