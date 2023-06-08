import SearchBar from '@/app/components/SearchBar'

export default function Header() {
  return (
    <header className="h-64 bg-gradient-to-r from-[#122048] to-[#646C87] px-4 py-16">
      <h1 className="mb-4 text-center text-5xl font-bold text-white">
        Find your table for any occasion
      </h1>
      <SearchBar />
    </header>
  )
}
