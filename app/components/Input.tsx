import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={`rounded border border-gray-300 p-3 outline-none transition-colors focus-visible:border-gray-500 ${props.className}`}
    />
  );
}
