"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
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
      <Input
        className="w-[450px]"
        placeholder="State, City, or Town"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        name="location"
      />
      <Button className="rounded bg-opentable-red-100 px-11 font-bold text-white transition-colors duration-300 hover:bg-opentable-red-200">
        Let's go
      </Button>
    </form>
  );
}
