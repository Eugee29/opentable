import Header from '@/app/components/Header'
import RestaurantCard from '@/app/components/RestaurantCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-40 mt-12 px-8">
        <ul className="flex flex-wrap">
          <li className="w-[236px]">
            <Link href="/restaurant/super-restaurant">
              <RestaurantCard />
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}
