"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    router.push(`/search?location=${location}`);
  };

  return (
    <form
      className="m-auto flex h-12 justify-center gap-4 text-left"
      onSubmit={handleSubmit}
    >
      <input
        className="w-[450px] rounded p-2 text-lg"
        placeholder="State, City, or Town"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="rounded bg-[#da3743] px-11 font-bold text-white transition-all duration-300 hover:brightness-75">
        Let's go
      </button>
    </form>
  );
}
