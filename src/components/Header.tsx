import Image from "next/image";
import React from "react";
import Logo from "../../public/images/images-home/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full flex fixed shadow-shadows-small p-4 z-50" >
      <div  className="w-full flex justify-between items-center">
        <div className="cursor-pointer" >
          <Link href="/">
          <Image src={Logo} alt="logo" height={34} width={68}></Image>
        </Link>
        </div>
        <Link href="/orders">
        <div className="flex items-center">
          <MdOutlineShoppingBag className="text-xl"></MdOutlineShoppingBag>
        <p className="text-sm">{'سفارشات'}</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
