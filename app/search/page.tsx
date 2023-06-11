import Header from "@/app/search/components/Header";
import RestaurantCard from "@/app/search/components/RestaurantCard";
import SearchSideBar from "@/app/search/components/SearchSideBar";
import { Cuisine, PRICE, PrismaClient } from "@prisma/client";

export const metadata = {
  title: "Search",
};

const prisma = new PrismaClient();

export interface SearchRestaurantType {
  id: string;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  slug: string;
}

const fetchRestaurantsByCity = async (
  city: string
): Promise<SearchRestaurantType[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
  };

  if (!city) return await prisma.restaurant.findMany({ select });
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: city.toLocaleLowerCase(),
      },
    },
    select,
  });
};

interface Props {
  searchParams: { city: string };
}

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  const renderRestaurants = () => {
    if (!restaurants.length) return <p>No restaurants found...</p>;
    return (
      <ul>
        {restaurants.map((restaurant) => (
          <li className="border-b py-5">
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
        <SearchSideBar />
        <div className="flex-grow">{renderRestaurants()}</div>
      </div>
    </>
  );
}
