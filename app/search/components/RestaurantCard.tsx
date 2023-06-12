import Price from "@/app/components/Price";
import { RestaurantCardType } from "@/app/page";
import Link from "next/link";

interface Props {
  restaurant: RestaurantCardType;
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
            <Price className="mr-4" price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <Link className="text-red-600" href={`/restaurant/${restaurant.slug}`}>
          View more information
        </Link>
      </div>
    </div>
  );
}
