import RestaurantNavBar from '@/app/restaurant/[slug]/components/NavBar'
import Menu from '@/app/restaurant/[slug]/menu/components/Menu'
import MenuCard from '@/app/restaurant/[slug]/menu/components/MenuCard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { items: true },
  })

  if (!restaurant) throw new Error()

  return restaurant.items
}

interface Props {
  params: { slug: string }
}

export default async function MenuPage({ params }: Props) {
  const menu = await fetchRestaurantMenu(params.slug)

  return (
    <>
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </>
  )
}
