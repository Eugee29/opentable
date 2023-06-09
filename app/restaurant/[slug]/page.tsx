import Description from "@/app/restaurant/[slug]/components/Description";
import Images from "@/app/restaurant/[slug]/components/Images";
import RestaurantNavBar from "@/app/restaurant/[slug]/components/NavBar";
import Rating from "@/app/restaurant/[slug]/components/Rating";
import Reviews from "@/app/restaurant/[slug]/components/Reviews";
import Title from "@/app/restaurant/[slug]/components/TItle";
import { Restaurant } from "@/app/restaurant/[slug]/layout";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

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
  params: { slug: string };
}

export default async function RestaurantDetails({ params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <RestaurantNavBar slug={params.slug} />
      <Title name={restaurant.name} />
      <Rating reviews={restaurant.reviews} />
      <Description description={restaurant.description} />
      <Images images={restaurant.images} />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
