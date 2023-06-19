"use client";

import SignInModal from "@/app/components/SignInModal";
import SignUpModal from "@/app/components/SignUpModal";
import { useState } from "react";

export default function AuthButtons() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignInClose = () => setSignInOpen(false);
  const handleSingInOpen = () => setSignInOpen(true);

  const handleSignUpClose = () => setSignUpOpen(false);
  const handleSignUpOpen = () => setSignUpOpen(true);

  return (
    <>
      <SignInModal open={signInOpen} onClose={handleSignInClose} />
      <SignUpModal open={signUpOpen} onClose={handleSignUpClose} />

      <div className="stretch flex gap-2">
        <button
          className="h-full rounded border p-1 px-4"
          onClick={handleSingInOpen}
        >
          Sign in
        </button>
        <button
          className="h-full rounded bg-[#237F9E] p-1 px-4 text-white"
          onClick={handleSignUpOpen}
        >
          Sign up
        </button>
      </div>
    </>
  );
}
