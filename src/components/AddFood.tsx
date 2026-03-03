import React from "react";
import { FoodsType } from "@/model/types";
import { MdAdd, MdDelete, MdHorizontalRule } from "react-icons/md";
import { convertToPersian } from "@/utils/convertToPersian";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "@/redux/slice/cartslice";
interface Props {
  cartFood: FoodsType;
}
const AddFood = ({ cartFood }: Props) => {
    const dispatch=useDispatch()
  return (
    <div className="flex flex-wrap justify-between items-center min-w-28">
      <div onClick={()=>dispatch(deleteProduct(cartFood))} className="flex w-8 h-8 justify-center items-center bg-white shadow-shadows-medium rounded-full text-primary-main cursor-pointer hover:bg-primary-main hover:text-white text-sm">
{cartFood.count===1 ?      <MdDelete/>
:  <MdHorizontalRule/>}
       
      </div>
      <p className="text-sm font-bold">
{cartFood.count && convertToPersian(cartFood.count)}
      </p>
      <div onClick={()=>dispatch(addProduct(cartFood))} className="flex w-8 h-8 justify-center items-center bg-white shadow-shadows-medium rounded-full text-primary-main cursor-pointer hover:bg-primary-main hover:text-white text-sm"><MdAdd ></MdAdd></div>
    </div>
  );
};

export default AddFood;
