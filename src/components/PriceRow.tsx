import { convertToPersian } from "@/utils/convertToPersian";
import React from "react";

const PriceRow = ({ title, price }) => {
  return (
    <div  className="w-full flex justify-between my-1">
      <p>{title}</p>
      <div className="flex text-sm">
        <p className="font-bold">{convertToPersian(price)}</p>
        <p className="mr-1">{"تومان"}</p>
      </div>
    </div>
  );
};

export default PriceRow;
