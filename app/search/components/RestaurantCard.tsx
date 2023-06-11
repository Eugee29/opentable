import Link from "next/link";
import { SearchRestaurantType } from "../page";

interface Props {
  restaurant: SearchRestaurantType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="flex">
      <img
        className="h-[136px] w-[12.8125rem] rounded object-cover"
        src={restaurant.main_image}
        alt={restaurant.name}
      />
      <div className="pl-5">
        <h2 className="mb-1 text-lg font-bold text-[#247f9e]">
          {restaurant.name}
        </h2>
        <div className="flex items-start">
          <div className="flex">*****</div>
          <p className="ml-2 text-sm font-medium">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-sm">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/super-restaurant">View more information</Link>
        </div>
      </div>
    </div>
  );
}
