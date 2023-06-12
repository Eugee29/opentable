import MenuCard from "@/app/restaurant/[slug]/menu/components/MenuCard";
import { Item } from "@prisma/client";

interface Props {
  menu: Item[];
}

export default function Menu({ menu }: Props) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h1 className="text-2xl font-bold">Menu</h1>
        </div>
        {/* <ul className="flex flex-wrap justify-center gap-4"> */}
        {menu.length ? (
          <ul className="grid grid-cols-2 gap-4">
            {menu.map((item) => (
              <li className="inline" key={item.id}>
                <MenuCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>This restaurant does not have a menu...</p>
        )}
      </div>
    </main>
  );
}
