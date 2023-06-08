import Form from '@/app/reserve/[slug]/components/Form'
import Header from '@/app/reserve/[slug]/components/Header'

export const metadata = {
  title: 'Reserve at Super Restaurant',
}

export default function ReservationPage() {
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header />
        <Form />
      </div>
    </div>
  )
}
