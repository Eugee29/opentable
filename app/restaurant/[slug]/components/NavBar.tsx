import Link from 'next/link'

interface Props {
  slug: string
}

export default function RestaurantNavBar({ slug }: Props) {
  return (
    <nav className="flex border-b py-4 text-sm font-medium">
      <Link className="mr-7" href={`/restaurant/${slug}`}>
        Overview
      </Link>
      <Link className="mr-7" href={`/restaurant/${slug}/menu`}>
        Menu
      </Link>
    </nav>
  )
}
