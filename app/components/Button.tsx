import React, { DetailedHTMLProps } from "react";

export default function Button(
  props: DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className={`col-span-2 rounded bg-opentable-red-100 py-3 font-bold text-white transition-colors duration-300 hover:bg-[#b8222d] disabled:bg-gray-500 ${props.className}}`}
    >
      {props.children}
    </button>
  );
}
