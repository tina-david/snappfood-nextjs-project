import { DATABASE } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const Categories = () => {
  return (
    <div className="w-full flex flex-wrap max-w-7xl mt-8">
      <div className="w-full my-8 font-bold text-carbon-light ">
        {"دسته بندی"}
      </div>
      <div className="flex flex-wrap w-full">
        {DATABASE.cats.map((category) => (
          <div
            key={category.id}
            className="flex flex-wrap w-1/2 md:w-1/6 justify-center p-2 "
          >
            <Link href={`/category/${category.id}`}>
              <div className="border-white border-solid border-4 rounded-xl shadow-shadows-medium h-24 w-max md:w-3/4 hover:shadow-shadows-high relative">
                <Image
                  src={category.img}
                  alt={category.title}
                  height={100}
                  width={100}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                />
                <div className="flex absolute bg-white bottom-0 -right-1 text-sm py-1 px-3 rounded-tl-xl rounded-br-xl">
                  {category.title}
                  <MdArrowBackIos
                    style={{
                      color: "#ff00a6",
                      marginRight: "8px",
                      marginTop: "2px  ",
                    }}
                  />
                </div>
              </div>
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
