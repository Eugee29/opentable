import Header from "@/app/restaurant/[slug]/components/Header";
import ReservationCard from "@/app/restaurant/[slug]/components/ReservationCard";
import prisma from "@/lib/prisma";
import { Review } from "@prisma/client";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export const metadata = {
  title: "Super Restaurant",
};

export interface Restaurant {
  id: string;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) notFound();

  return restaurant;
};

interface Props {
  children: ReactNode;
  params: { slug: string };
}

export default async function RestaurantLayout({ children, params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <main>
      <Header name={params.slug} />
      <div className="m-auto -mt-[53px] flex items-start justify-center gap-8">
        <section className="min-h-screen w-[40rem] rounded bg-white px-4 shadow">
          {children}
        </section>
        <ReservationCard restaurant={restaurant} />
      </div>
    </main>
  );
}
