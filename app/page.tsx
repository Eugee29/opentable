import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100 text-[#2d333f]">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* NAVBAR */}
        <nav className="flex justify-between bg-white p-2">
          <a href="" className="text-2xl font-bold text-gray-700">
            OpenTable
          </a>
          <div>
            <div className="flex gap-2">
              <button className="rounded  bg-[#237F9E] p-1 px-4 text-white">
                Sign up
              </button>
              <button className="rounded border p-1 px-4">Sign in</button>
            </div>
          </div>
        </nav>
        <main>
          {/* HEADER */}
          <header className="h-64 bg-gradient-to-r from-[#122048] to-[#646C87] px-4 py-16">
            <h1 className="mb-4 text-center text-5xl font-bold text-white">
              Find your table for any occasion
            </h1>
            <div className="m-auto flex h-12 justify-center gap-4 text-left">
              <input className="w-[450px] rounded p-2 text-lg" type="text" />
              <button className="rounded bg-[#da3743] px-11 font-bold text-white">
                Let's go
              </button>
            </div>
          </header>
          {/* CARDS */}
          <ul className="mt-10 flex flex-wrap px-36 py-3">
            <li>
              {/* CARD */}
              <div className="h-72 w-64 cursor-pointer overflow-hidden rounded border">
                <img
                  className="h-36"
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/28112008.jpg"
                  alt=""
                />
                <div className="p-1">
                  <h3 className="mb-2 text-lg font-bold">animar</h3>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </main>
    </main>
  )
}
