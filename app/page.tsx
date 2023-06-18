import Header from "@/app/components/Header";
import RestaurantCard from "@/app/components/RestaurantCard";
import prisma from "@/utils/prisma";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";

export interface RestaurantCardType {
  id: string;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  slug: string;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const fetchRestaurants = (): Promise<RestaurantCardType[]> => {
  return prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <ul className="mx-40 mt-12 flex flex-wrap justify-center gap-4 px-8">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </>
  );
}
