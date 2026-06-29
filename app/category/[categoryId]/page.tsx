import Breadcrumb from "@/components/Breadcrumb";
import RestaurantCart from "@/components/RestaurantCart";
import { DATABASE } from "@/data/data";

interface Props {
  params: Promise<{ categoryId: string }>;
}
export default async function Page({ params }: Props) {
  const { categoryId } = await params;
  const category = DATABASE.cats.find((cat) => cat.id === +categoryId)?.title;
  const restaurants = DATABASE.restaurants.filter((res) =>
    res.catId.includes(+categoryId),
  );
  const hasEmptyRestaurant = restaurants.length === 0;
  return (
    <div className="flex flex-wrap justify-center p-1 md:p-4">
      My Post:{categoryId}
      <div className="flex flex-wrap w-full my-16">
        <Breadcrumb title={category}/>
        {hasEmptyRestaurant ? (
          <p className="text-2xl text-gray-400 mt-3">
            {"رستورانی در این دسته بندی وجود ندارد:("}
          </p>
        ) : (
          restaurants.map((restaurant) => (
            <div className="w-full md:w-1/4 p-2">
              <RestaurantCart restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
