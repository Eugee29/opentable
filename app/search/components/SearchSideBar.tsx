import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

interface Props {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { location?: string; cuisine?: string; price?: PRICE };
}

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: Props) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
    },
  ];

  return (
    <nav className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <Link
                className={`font-light capitalize ${
                  searchParams.location?.toLowerCase() ===
                  location.name.toLowerCase()
                    ? "text-red-600"
                    : ""
                }`}
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    location:
                      searchParams.location?.toLowerCase() ===
                      location.name.toLowerCase()
                        ? undefined
                        : location.name,
                  },
                }}
              >
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        <ul>
          {cuisines.map((cuisine) => (
            <li key={cuisine.id}>
              <Link
                className={`font-light capitalize ${
                  searchParams.cuisine?.toLowerCase() ===
                  cuisine.name.toLowerCase()
                    ? "text-red-600"
                    : ""
                }`}
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    cuisine:
                      searchParams.cuisine?.toLowerCase() ===
                      cuisine.name.toLowerCase()
                        ? undefined
                        : cuisine.name,
                  },
                }}
              >
                {cuisine.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <ul className="flex">
          {prices.map(({ price, label }, i) => (
            <li
              key={price}
              className={`flex-1 border text-center font-light first:rounded-l last:rounded-r ${
                searchParams.price?.toLowerCase() === price.toLowerCase()
                  ? "border-1 border-red-600 text-red-600"
                  : "first:border-r-0 last:border-l-0"
              }`}
            >
              <Link
                className="block p-2"
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price:
                      searchParams.price?.toLowerCase() === price.toLowerCase()
                        ? undefined
                        : price,
                  },
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
