import Header from "@/app/search/components/Header";
import RestaurantCard from "@/app/search/components/RestaurantCard";
import SearchSideBar from "@/app/search/components/SearchSideBar";
import { PRICE } from "@prisma/client";
import { RestaurantCardType } from "../page";
import prisma from "@/prisma/client";

export const metadata = {
  title: "Search",
};

interface searchParams {
  location?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurants = (
  searchParams: searchParams
): Promise<RestaurantCardType[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    slug: true,
    location: true,
    price: true,
    reviews: true,
  };

  if (!searchParams.location) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: searchParams.location, mode: "insensitive" },
      },
      cuisine: {
        name: { equals: searchParams.cuisine, mode: "insensitive" },
      },
      price: { equals: searchParams.price },
    },
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

interface Props {
  searchParams: searchParams;
}

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  const renderRestaurants = () => {
    if (!restaurants.length) return <p>No restaurants found...</p>;
    return (
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="border-b py-5">
            <RestaurantCard restaurant={restaurant} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start gap-8 py-4">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="flex-grow">{renderRestaurants()}</div>
      </div>
    </>
  );
}
