"use client";

import Image from "next/image";
import errorMascot from "@/public/icons/error.png";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <div className="bg-grey-200 flex flex-1 flex-col items-center justify-center">
      <Image className="mb-8 w-56" src={errorMascot} alt="Error" />
      <div>
        <h3 className="text-3xl font-bold">Yikes!</h3>
        <p className="font-bold">{error.message}</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
}
