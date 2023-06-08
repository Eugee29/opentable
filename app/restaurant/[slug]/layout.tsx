import Header from '@/app/restaurant/[slug]/components/Header'
import RestaurantNavBar from '@/app/restaurant/[slug]/components/NavBar'
import ReservationCard from '@/app/restaurant/[slug]/components/ReservationCard'

export const metadata = {
  title: 'Super Restaurant',
}

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      <div className="m-auto -mt-[53px] flex items-start justify-center gap-8">
        <section className="min-h-screen w-[40rem] rounded bg-white px-4 shadow">
          <RestaurantNavBar />
          {children}
        </section>
        <ReservationCard />
      </div>
    </main>
  )
}
