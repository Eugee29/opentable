import Header from "@/app/components/Header";

export default function Loading() {
  return (
    <main>
      <Header />
      <ul className="mx-40 mt-12 flex flex-wrap justify-center gap-4 px-8">
        {[...Array(12)].map((i) => (
          <li
            key={i}
            className="h-[19rem] w-[14.75rem] animate-pulse gap-4 overflow-hidden rounded bg-slate-200"
          ></li>
        ))}
      </ul>
    </main>
  );
}
