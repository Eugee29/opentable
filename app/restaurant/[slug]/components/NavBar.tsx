import Link from 'next/link'

export default function RestaurantNavBar() {
  return (
    <nav className="flex border-b py-4 text-sm font-medium">
      <Link className="mr-7" href="/restaurant/super-restaurant">
        Overview
      </Link>
      <Link className="mr-7" href="/restaurant/super-restaurant/menu">
        Menu
      </Link>
    </nav>
  )
}
