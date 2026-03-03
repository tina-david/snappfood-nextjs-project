"use client";
import { FoodsType, RestaurantsType } from "@/model/types";
import { clearProduct } from "@/redux/slice/cartslice";
import { convertToPersian } from "@/utils/convertToPersian";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import AddFood from "./AddFood";
import PriceRow from "./PriceRow";
import { addToHistoryCart } from "@/redux/slice/historyCart";
interface Props {
  restaurantData: RestaurantsType;
}
const Cart = ({ restaurantData }: Props) => {
  const cart = useSelector(
    (state): { cart: FoodsType[] } => state.cart,
  ) as FoodsType[];
  const totalCount = cart.reduce((total, food) => total + food.count, 0);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (total, food) => total + food.count * food.price,
    0,
  );
const handlePurchase=()=>{
    const cartDetail={
        purchaseData:cart,
        totalPurchase,
        restaurantData:{
            name:restaurantData.name,
            image:restaurantData.image,
            address:restaurantData.address

        }
    }
    dispatch(addToHistoryCart(cartDetail))
    dispatch(clearProduct())
}

  const totalPurchase = totalPrice + restaurantData.delivery.price;
  const isCartEmpty = totalCount === 0;
  if (isCartEmpty) {
    return null;
  }
  return (
    <div className="flex w-full rounded-xl p-5 bg-white shadow-shadows-medium mt-2 flex-wrap">
      <div className=" flex w-full justify-between items-center">
        <p>{`سبد خرید (${convertToPersian(totalCount)})`}</p>
        <div className="text-alert-main text-lg cursor-pointer ">
          <MdDelete onClick={() => dispatch(clearProduct())}></MdDelete>
        </div>
      </div>
      {cart.map((food) => (
        <React.Fragment key={food.id}>
          <div className="flex flex-col my-3 w-full ">
            <p className="font-bold w-full"> {food.name}</p>
            <div className="w-full flex flex-wrap justify-between mt-3 items-center">
              <div className="flex text-sm">
                <p className="font-bold">{convertToPersian(food.price)}</p>
                <p className=" mr-1">{"تومان"}</p>
              </div>
              <AddFood cartFood={food} />
            </div>
          </div>
          <div className="w-full my-2 h-0.5 bg-gray6-color"></div>
        </React.Fragment>
      ))}

      <div className="w-full">
        <PriceRow title={"مجموع"} price={totalPrice} />
        <PriceRow
          title={"هزینه ارسال "}
          price={restaurantData.delivery.price}
        />
      </div>
      <div className="w-full my-2 h-0.5 bg-gray6-color"></div>

      <div className="w-full">
        <PriceRow title={"قابل پرداختی"} price={totalPurchase} />
      </div>
      <div className="w-full  mt-10">
        <button onClick={handlePurchase}
         className=" w-full bg-primary-main text-center py-2 rounded-lg text-lg font-bold text-white ">
            {'ثبت پرداخت'}
        </button>
      </div>
    </div>
  );
};

export default Cart;
