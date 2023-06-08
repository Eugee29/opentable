import Description from '@/app/restaurant/[slug]/components/Description'
import Images from '@/app/restaurant/[slug]/components/Images'
import RestaurantNavBar from '@/app/restaurant/[slug]/components/NavBar'
import Rating from '@/app/restaurant/[slug]/components/Rating'
import Reviews from '@/app/restaurant/[slug]/components/Reviews'
import Title from '@/app/restaurant/[slug]/components/TItle'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Restaurant {
  id: string
  name: string
  images: string[]
  description: string
  slug: string
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
    },
  })

  if (!restaurant) throw new Error()

  return restaurant
}

interface Props {
  params: { slug: string }
}

export default async function RestaurantDetails({ params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      <RestaurantNavBar slug={params.slug} />
      <Title name={restaurant.name} />
      <Rating />
      <Description description={restaurant.description} />
      <Images images={restaurant.images} />
      <Reviews />
    </>
  )
}
