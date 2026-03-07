"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { HistoryType } from "@/model/types";
import { convertToPersian } from "@/utils/convertToPersian";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const historyCart = useSelector(
    (state):  HistoryType[] => state.historyCard,
  ) as HistoryType[];
  const isHistoryCartEmpty = historyCart.length === 0;
  return (
    <div className="flex w-full justify-center flex-wrap p-1 md:p-4">
      <div className="flex flex-wrap w-full my-16 max-w-7xl">
        <Breadcrumb title="سفارش ها" />
        <div className="w-full md:w-1/3 p-4">
          <div className="flex flex-col w-full px-4 py-6 bg-white rounded-xl">
            <p className="font-bold text-lg">{"تینا داودی مقدم"}</p>
            <p>{convertToPersian(9389606266, false)}</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full px-4 py-6 bg-white rounded-xl">
            <p className="font-bold text-gray-400 mb-4">{"سفارش های من"}</p>
            {isHistoryCartEmpty ? (
              <p className="text-sm text-gray-400">
                {"شما هنوز سفارشی ثبت نکرده اید:("}
              </p>
            ) : (
              historyCart.map((cart, index) => (
                <div className="w-full my-3" key={index}>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center ">
                      <div className="w-16 h-1/6 border-solid border-4 border-white rounded-xl ml-2">
                        <Image
                          src={cart.restaurantData.image}
                          alt={cart.restaurantData.name}
                          height={100}
                          width={100}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px",
                          }}
                        />
                      </div>
                      <div>
                        <p className=" font-bold">{cart.restaurantData.name}</p>
                        <p
                          className="text-xs
                        
                         "
                        >
                          {cart.restaurantData.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="font-bold">
                        {convertToPersian(cart.totalPurchase)}
                      </p>
                      <p className="text-sm mr-1">{"تومان"}</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap mt-2">
                    {cart.purchaseData.map((item) => (
                      <div
                        className="w-10 h-10 rounded-xl border-1 border-gray-500 border-solid ml-2 "
                        key={item.id}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={100}
                          width={100}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px",
                          }}
                        />
                      </div>
                    ))}
                        <div className="w-full my-2 h-0.5 bg-gray6-color"></div>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
