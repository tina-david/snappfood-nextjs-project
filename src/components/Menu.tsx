"use client";
import { DATABASE } from "@/data/data";
import { FoodsType } from "@/model/types";
import { convertToPersian } from "@/utils/convertToPersian";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/slice/cartslice";
import AddFood from "./AddFood";
type Props = {
  restaurantId: string;
};
const Menu = ({ restaurantId }: Props) => {
  const foods = DATABASE.foods.filter(
    (food) => food.restId !== +restaurantId,
  ) as FoodsType[];
  const cart = useSelector((state  )  :{cart:FoodsType[]}=> state.cart);
  const dispatch = useDispatch();

  console.log(cart,"cart");

  return (
    <div className="flex justify-center bg-white  flex-wrap w-full rounded-md border-solid border-surface-dark border-2 border-b-0">
      <div className="flex justify-center items-center w-full text-xs  py-4 border-solid border-surface-dark  border-b-2 ">
        {"غذا ها"}
      </div>
      <div className="flex flex-wrap">
        {foods.map((food:FoodsType  ) => {
          const cartFood=cart.find(item=>item.id===food.id)
          return(
          <div
            key={food.id}
            className=" flex flex-col border justify-between border-surface-dark  w-full md:w-1/2 p-4"
          >
            <div className="flex justify-between ">
              <div className="flex flex-wrap  w-1/2 ">
                <div className="flex flex-wrap font-bold ">{food.name}</div>
                <div className="mt-2 flex flex-wrap text-xs font-bold">
                  {food.desc}
                </div>
              </div>
              <div className="flex w-28 h-28 rounded-xl  ">
                <Image
                  src={food.image}
                  alt={food.image}
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
            <div className=" flex justify-between mt-4 items-center ">
              <p className="text-sm">{convertToPersian(food.price)} تومان</p>
            { 
            !!cartFood? <AddFood cartFood={cartFood} />
            :
            <div
                onClick={() => dispatch(addProduct(food))}
                className=" bg-white rounded-2xl shadow-shadows-modal    py-2 text-primary-main px-8 hover:bg-primary-main hover:text-white hover:cursor-pointer hover:transition-all"
              >
                {"افزودن"}
              </div>}
            </div>
          </div>
          )
})}
      </div>
    </div>
  );
};

export default Menu;
