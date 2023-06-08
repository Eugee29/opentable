import Header from '@/app/restaurant/[slug]/components/Header'
import RestaurantNavBar from '@/app/restaurant/[slug]/components/NavBar'
import ReservationCard from '@/app/restaurant/[slug]/components/ReservationCard'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Super Restaurant',
}

interface Props {
  children: ReactNode
  params: { slug: string }
}

export default function RestaurantLayout({ children, params }: Props) {
  return (
    <main>
      <Header name={params.slug} />
      <div className="m-auto -mt-[53px] flex items-start justify-center gap-8">
        <section className="min-h-screen w-[40rem] rounded bg-white px-4 shadow">
          {children}
        </section>
        <ReservationCard />
      </div>
    </main>
  )
}
