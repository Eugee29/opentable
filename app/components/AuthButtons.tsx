"use client";

import SignInModal from "@/app/components/SignInModal";
import SignUpModal from "@/app/components/SignUpModal";
import { AuthContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import { useContext, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function AuthButtons() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignInClose = () => setSignInOpen(false);
  const handleSingInOpen = () => setSignInOpen(true);

  const handleSignUpClose = () => setSignUpOpen(false);
  const handleSignUpOpen = () => setSignUpOpen(true);

  const { user, loading } = useContext(AuthContext);
  const { signOut } = useAuth();

  return (
    <div className="flex h-full gap-2">
      {loading ? (
        <div className="h-full w-24 animate-pulse rounded bg-slate-200"></div>
      ) : (
        <>
          {user ? (
            <button
              className="h-full rounded border p-1 px-4"
              onClick={signOut}
            >
              Sign out
            </button>
          ) : (
            <>
              <SignInModal open={signInOpen} onClose={handleSignInClose} />
              <SignUpModal open={signUpOpen} onClose={handleSignUpClose} />
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
            </>
          )}
        </>
      )}
    </div>
  );
}
