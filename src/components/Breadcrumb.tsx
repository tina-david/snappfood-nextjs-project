import Link from "next/link";
import { title } from "process";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Breadcrumb = ({ title }) => {
  return (
    <div className="flex flex-wrap w-full items-center">
        <Link href={"/"}>
      <p className="text-sm text-gray-400">{"اسنپ فود"}</p>
     </Link>
      <MdKeyboardArrowLeft className="ml-3 text-gray-400"/>
      <p className="text-sm ">{title}</p>
    </div>
  );
};
 
export default Breadcrumb;
