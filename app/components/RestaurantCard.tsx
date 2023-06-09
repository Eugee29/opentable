import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { RestaurantCardType } from "@/app/page";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import Image from "next/image";
import Link from "next/link";

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  const rating = calculateReviewRatingAverage(restaurant.reviews);

  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <div className="flex h-[19rem] w-[14.75rem] cursor-pointer flex-col overflow-hidden rounded-lg border">
        <Image
          className="h-[8.25rem] w-[14.625rem]"
          src={restaurant.main_image}
          alt={restaurant.name}
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="flex flex-grow flex-col p-2">
          <h1 className="mb-1 truncate text-lg font-bold leading-none">
            {restaurant.name}
          </h1>
          <div className="mb-1 flex items-center text-sm">
            <Stars rating={rating} />
            <p className="ml-2">
              {restaurant.reviews.length} review
              {restaurant.reviews.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="mb-2 flex text-sm font-light capitalize">
            <span className="mr-3">{restaurant.cuisine.name}</span>
            <Price className="mr-3" price={restaurant.price} />
            <span>{restaurant.location.name}</span>
          </div>
          <span className="mt-1 text-sm font-medium">Booked 3 times today</span>
        </div>
      </div>
    </Link>
  );
}
