import Header from '@/app/search/components/Header'
import RestaurantCard from '@/app/search/components/RestaurantCard'
import SearchSideBar from '@/app/search/components/SearchSideBar'

export const metadata = {
  title: 'Search',
}

export default function Search() {
  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar />
        <div className="w-5s/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}
