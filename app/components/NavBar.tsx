import AuthButtons from "@/app/components/AuthButtons";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex h-14 items-center justify-between p-2">
      <Link className="text-2xl font-bold text-gray-700" href="/">
        OpenTable
      </Link>
      <AuthButtons />
    </nav>
  );
}
