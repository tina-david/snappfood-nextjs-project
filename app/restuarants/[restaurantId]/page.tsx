import Breadcrumb from "@/components/Breadcrumb";
import Cart from "@/components/Cart";
import Menu from "@/components/Menu";
import { DATABASE } from "@/data/data";
import { RestaurantsType } from "@/model/types";
import { convertToPersian } from "@/utils/convertToPersian";
import Image from "next/image";

interface Props {
  params: Promise<{
    restaurantId: string;
  }>;
}
export default async function Page({ params }: Props) {
  const { restaurantId } = await params;
  const [restaurantData] = DATABASE.restaurants.filter(
    (res) => res.id === +restaurantId,
  ) as RestaurantsType[];
  return (
    <div className="flex  flex-wrap justify-center  p-1 md:p-4 w-full ">
      <div className="flex flex-wrap w-full my-16">
        <Breadcrumb title={restaurantData.name}></Breadcrumb>
      </div>
      <div className="flex flex-wrap w-1/2 gap-2  md:w-full max-w-7xl    justify-between">
        <div className="flex h-20 gap-3 md:w-1/5">
          <div className="flex rounded-md ">
            <Image
              src={restaurantData.image}
              alt={restaurantData.image}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="flex font-bold mt-2 ">
            <div>{restaurantData.name}</div>
          </div>
        </div>
        <div className="flex flex-wrap md:w-2/4">
          <Menu restaurantId={restaurantId} />
        </div>
        <div className=" flex-wrap   md:w-1/4  md:px-4  w-full ">
          <div className="flex rounded-md justify-center   md:p-2 bg-white shadow-shadows-medium p-1 h-20 items-center w-full">
            <Image
              src={restaurantData.delivery.icon}
              alt="icon"
              width={16}
              height={16}
            />

            <div className="flex flex-wrap gap-1 ">
              <div> {restaurantData.delivery.type} </div>
              <div> {convertToPersian(restaurantData.delivery.price)} </div>
            </div>
          </div>
          <Cart restaurantData={restaurantData} />
        </div>
      </div>
    </div>
  );
}
