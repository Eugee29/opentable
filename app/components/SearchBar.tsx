'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const router = useRouter()

  return (
    <div className="m-auto flex h-12 justify-center gap-4 text-left">
      <input
        className="w-[450px] rounded p-2 text-lg"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-[#da3743] px-11 font-bold text-white transition-all duration-300 hover:brightness-75"
        onClick={() => {
          if (location === 'banana') return
          router.push('/search')
        }}
      >
        Let's go
      </button>
    </div>
  )
}
