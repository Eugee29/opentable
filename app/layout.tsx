import NavBar from "@/app/components/NavBar";
import AuthProvider from "@/app/context/AuthContext";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "OpenTable", template: "%s | OpenTable" },
  description: "Book a restaurant",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#F7F7F7] text-[#2d333f]`}
      >
        <AuthProvider>
          <div className="m-auto flex min-h-screen max-w-[100rem] flex-col bg-white">
            <NavBar />
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
