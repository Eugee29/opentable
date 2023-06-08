import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-between p-2">
      <Link className="text-2xl font-bold text-gray-700" href="/">
        OpenTable
      </Link>
      <div className="flex gap-2">
        <button className="rounded bg-[#237F9E] p-1 px-4 text-white">
          Sign up
        </button>
        <button className="rounded border p-1 px-4">Sign in</button>
      </div>
    </nav>
  )
}
